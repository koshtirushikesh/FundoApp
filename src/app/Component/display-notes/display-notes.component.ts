import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/Note/note.service';


@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {

  display:boolean = true;
  
  constructor(private note:NoteService) { }
  @Input() noteList:any;
  ngOnInit(): void {
  }

  
}
