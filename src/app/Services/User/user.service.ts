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
                                       // https://localhost:5001/api/User/login
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
}
