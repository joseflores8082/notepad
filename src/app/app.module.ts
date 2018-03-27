import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { NotepadComponent } from './notepad/notepad.component';
import { NotesComponent } from './notepad/notes/notes.component';


@NgModule({
  declarations: [
    AppComponent,
    NotepadComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
