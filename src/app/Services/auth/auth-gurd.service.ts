import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGurdService {

  constructor() { }
  gettoken(){  
    return !!localStorage.getItem("token");  
    }  
} 

