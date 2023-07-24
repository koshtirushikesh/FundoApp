import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  PostService(url:string , paylode:any ,token:boolean = false, httpOption: any={}){
    return this.http.post(url,paylode,token && httpOption)
  }

  PutService(url:string , reqData:any ,token:boolean=false, httpOption:any ={}){
    return this.http.put(url,reqData,token && httpOption)
  }

  GetServices(url:string, token: boolean=false , httpOption: any ={ }){
    return this.http.get(url,token && httpOption)
  }

  DeleteServices(url:string , token:boolean=false ,httpOption: any ={ }){
    return this.http.delete(url,token&& httpOption)
  }
}
