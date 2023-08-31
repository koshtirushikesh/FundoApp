import { Component, Input, OnInit } from '@angular/core';

import { NoteService } from 'src/app/Services/Note/note.service';

@Component({
  selector: 'app-note-tool-icon',
  templateUrl: './note-tool-icon.component.html',
  styleUrls: ['./note-tool-icon.component.scss']
})
export class NoteToolIconComponent implements OnInit {
  
  noteID:any;
  data:any;
  colours: any = ["white","yellow","blue","purple","prink","gray","light gray"];
  @Input() noteData:any;
  constructor(private noteServices:NoteService) { }

  ngOnInit(): void {
    
    
  }

  archieveAndUnarchive(){
      console.log(this.noteData);
      this.noteServices.archiveAndUnArchive(this.noteData.noteID).subscribe((response) =>
      {
        console.log(response);
      });
      console.log(this.noteData.noteID);

  }

  changeColour(color:any){
    console.log(this.noteData);
    this.noteServices.changeColour(color,this.noteData.noteID).subscribe((response) =>
    {
      console.log(response);
    });
  }

  trashNote(){
    console.log(this.noteData);
    this.noteServices.trashUnTrash(this.noteData.noteID).subscribe((response) =>
    {
      console.log(response);
    })
  }

}
