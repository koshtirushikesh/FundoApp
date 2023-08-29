import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  baseUrl = environment.baseUrl;
  token :any;
  constructor(private httpService:HttpService) { this.token=localStorage.getItem('token')}

  AddNote(reqData:any)
  {
    console.log(reqData);
    let header ={
      headers:new HttpHeaders(
        {
          'Content-type' : 'application/json',
          'Authorization' : 'Bearer ' + this.token,
        }
      )
    }
    console.log(reqData);
    return this.httpService.PostService(this.baseUrl+'Note/add-note',reqData,true,header)
  }

  getNote()
  {
    let header ={
      headers:new HttpHeaders(
        {
          'Content-type' : 'application/json',
          'Authorization' : 'Bearer ' + this.token,
        }
      )
    }
    return this.httpService.GetServices(this.baseUrl+'Note/get-all-notes-by-userid',true,header)
  }

  archiveAndUnArchive(id:any){
    let header = {
      headers:new HttpHeaders(
        {
          'Content-type' : 'application/json',
          'Authorization' : 'Bearer '+ this.token,
        }
      )
    }
    return this.httpService.PostService(this.baseUrl+'Note/archive-unarchive?noteID='+id ,{ },true,header);
  }

  PinAndUnPin(id:any){
    let header = {
      headers:new HttpHeaders(
        {
          'Content-type' : 'application/json',
          'Authorization' : 'Bearer '+ this.token,
        }
      )
    }
    return this.httpService.PostService(this.baseUrl+'Note/pin-unpinned?noteID='+id ,{ },true,header);
  }
}
