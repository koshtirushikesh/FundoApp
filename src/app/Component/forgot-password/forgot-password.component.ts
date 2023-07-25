import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    
  }
  
  forgotPasswordForm = new FormGroup(
    {
      Email : new FormControl('')
    }
  )

  forgotSubmit(){
    console.log(this.forgotPasswordForm)
    let data = {
      Email : this.forgotPasswordForm.value.Email
    }
    this.userService.forgotPassword(data).subscribe(
      (res : any) => {
        console.log(res);
      }
    )
  }
}
