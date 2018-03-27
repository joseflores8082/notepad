import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor() { }

  myNotes: FormGroup;

  ngOnInit() {
    this.myNotes = new FormGroup({
      noteTitle: new FormControl(''),
      noteText: new FormControl(''),
    });
  }

}
