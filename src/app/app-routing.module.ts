import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Component/register/register.component';
import { LoginComponent } from './Component/login/login.component';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Component/reset-password/reset-password.component';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';
import { NoteComponent } from './Component/note/note.component';
import { GetnotesComponent } from './Component/getnotes/getnotes.component';
import { DisplayNotesComponent } from './Component/display-notes/display-notes.component';


const routes: Routes = [
  { path : '' , redirectTo:'/login',pathMatch:'full'},
  { path : 'register', component : RegisterComponent },
  { path : 'login', component : LoginComponent},
  { path : 'forgot-password', component: ForgotPasswordComponent},
  { path : 'reset-password/:token', component : ResetPasswordComponent},
  { path : 'nav-bar' , component : NavBarComponent },
  { path : 'note' , component:NoteComponent},
  { path : 'display-note' , component:DisplayNotesComponent},
  { path : 'home' , component:NavBarComponent },
  { path : 'get-note' , component:GetnotesComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
