import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { Note } from './shared';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent implements OnInit {

  constructor() { }

  myGroup: FormGroup;

  ngOnInit() {
    this.myGroup = new FormGroup({
      notePadTitle: new FormControl(''),
      noteTitle: new FormControl(''),
      noteText: new FormControl(''),
    });
  }

}
