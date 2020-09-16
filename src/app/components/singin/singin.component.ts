import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { TokenService } from '../../shared/token.service';
import { AuthStateService } from '../../shared/auth-state.service';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-signin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})

export class SinginComponent implements OnInit {
  loginForm: FormGroup;
  errors = null;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService,
  ) {
    this.loginForm = this.fb.group({
      email: [],
      password: [],
    });
    
  }

  ngOnInit() { }

  onSubmit() {
      this.authService.signin(this.loginForm.value).subscribe(
        result => {
          this.responseHandler(result);
          
        },
        error => {
          this.errors = error.error;
          console.log(this.errors);
          
        },() => {
          
          this.authState.setAuthState(true);
          this.loginForm.reset()
          this.router.navigate(['events']);
        }
      );
  }

  // Handle response
  responseHandler(data){
    this.token.handleData(data.access_token);
 
  }
 
}
