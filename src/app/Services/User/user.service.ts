import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../Http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.baseUrl;
  constructor(private httpService:HttpService) { }

  Login(data:any){
    let header = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
                                       // https://localhost:5001/api/
    return this.httpService.PostService(this.baseUrl+'User/login',data, false , header)
  }

  Register(data:any) {
    let header = {
      headers :new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.httpService.PostService(this.baseUrl+'User/register',data,false,header)
  }

  forgotPassword(data:any) {
    let header = {
      headers :new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.httpService.PostService(this.baseUrl+'User/forgot-password?email='+data.Email ,{},false,header)
  }

  resetPassword(data:any,token:string){
    console.log("reset token :->"+token) 
    let header = {
      headers : new HttpHeaders({
        'Content-type' : 'application/json',
        'Authorization' : 'Bearer ' + token
      })
    }
    return this.httpService.PostService(this.baseUrl+'User/reset-password',data,true,header)
  }
}
