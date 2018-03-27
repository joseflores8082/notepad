import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule,ReactiveFormsModule, Validators } from '@angular/forms';

import { Note } from './shared';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent implements OnInit {

  constructor() { }

  myNotes: FormGroup;

  ngOnInit() {
    this.myNotes = new FormGroup({
      notePadTitle: new FormControl(''),
      noteTitle: new FormControl('', [Validators.maxLength(255)]),
      noteText: new FormControl(''),
    });
  }
  onSubmit({ value, valid }: { value: Note, valid: boolean }) {
    console.log(value, valid);
  }

}
