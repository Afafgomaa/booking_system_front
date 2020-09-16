import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingupComponent } from './components/singup/singup.component';
import { SinginComponent } from './components/singin/singin.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {EventsComponent} from './components/events/events.component';


const routes: Routes = [ { path: 'register', component:  SingupComponent },
{path:'login',component: SinginComponent},
{path : 'profile', component:UserProfileComponent},
{path: 'events' ,  component : EventsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
