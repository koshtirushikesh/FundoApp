import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/User/user.service';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin?: boolean;
  constructor(private userService:UserService,private route: Router, private socialAuthService: SocialAuthService) { }

  ngOnInit(): void { 
    this.loginForm = new FormGroup({
      Email : new FormControl(''),
      Password : new FormControl('')
    });

    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      console.log(this.socialUser);
    });

  }
  
  
  loginSubmit(){
    console.log(this.loginForm)
    let data = {
      Email : this.loginForm.value.Email,
      Password : this.loginForm.value.Password
    }
    this.userService.Login(data).subscribe( 
      (res : any)  => {
        console.log(res);
        localStorage.setItem('token',res.response);
        console.log(res.response);
        this.route.navigateByUrl("/nav-bar");
      }
    );
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  logOut(): void {
    this.socialAuthService.signOut();
  }
  

}
