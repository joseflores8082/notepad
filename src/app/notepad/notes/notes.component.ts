import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
      noteTitle: new FormControl('', [Validators.maxLength(255)]),
      noteText: new FormControl(''),
    });
  }

}
