import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }


  showEvents() : Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/auth/events');

  }
  


}
