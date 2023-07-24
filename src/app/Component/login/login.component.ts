import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/Services/User/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void { }

  loginForm = new FormGroup({
    Email : new FormControl(''),
    Password : new FormControl('')
  })

  loginSubmit(){
    console.log(this.loginForm)
    let data = {
      Email : this.loginForm.value.Email,
      Password : this.loginForm.value.Password
    }
    this.userService.Login(data).subscribe( 
      (res : any)  => {
        console.log(res);
      }
    );
  }
}


