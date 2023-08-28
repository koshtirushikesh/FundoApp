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

}
