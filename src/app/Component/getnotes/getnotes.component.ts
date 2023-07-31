import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/Note/note.service';


@Component({
  selector: 'app-getnotes',
  templateUrl: './getnotes.component.html',
  styleUrls: ['./getnotes.component.scss']
})
export class GetnotesComponent implements OnInit {

  noteArray: any;
  constructor(private noteServices:NoteService) { this.onSubmit(); }

  ngOnInit(): void {
  }

  onSubmit(){
    this.noteServices.getNote().subscribe( (res :any) => {
      console.log(res);
      this.noteArray = res.response;
      console.log("store to array");
      console.log(this.noteArray);
    })
  }

}
