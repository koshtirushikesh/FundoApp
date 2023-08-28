import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {

  }
  
  registerForm = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    email : new FormControl(''),
    password: new FormControl(''),
    
  })

  registerSubmit(){
    console.log(this.registerForm)
    let data = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email : this.registerForm.value.email,
      password : this.registerForm.value.password,
      
    }
    this.userService.Register(data).subscribe( 
      (res : any)  => {
        console.log(res);
      }
    );
  }
}
