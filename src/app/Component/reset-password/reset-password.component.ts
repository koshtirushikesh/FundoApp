import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  token :any;
  constructor(private formBuilder:FormBuilder,private userService:UserService, private activatedRoutes:ActivatedRoute) { }

  ngOnInit(): void {
    this.token = this.activatedRoutes.snapshot.paramMap.get('token')
    console.log(this.token)
  }

  resetPasswordForm = new FormGroup ({
    password : new FormControl(''),
    confirmPassword : new FormControl('')
  })

  resetPasswordSubmit()
  {
    if(this.resetPasswordForm.valid)
    {
      
    }

    console.log("Reset"+this.resetPasswordForm.value);
      let data = {
        password : this.resetPasswordForm.value.password,
        confirmPassword : this.resetPasswordForm.value.confirmPassword
      }
      console.log(data);
      this.userService.resetPassword(data,this.token).subscribe(
        (res:any) =>{
          console.log(res);
        })
  }

}
