import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './templates/login/login.component';
import { SignupComponent } from './templates/signup/signup.component';
import { BooksComponent } from './templates/books/books.component';
import { AllBooksComponent } from './templates/all-books/all-books.component';
import { AddBooksComponent } from './templates/add-books/add-books.component';
import { EditBooksComponent } from './templates/edit-books/edit-books.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    BooksComponent,
    AllBooksComponent,
    AddBooksComponent,
    EditBooksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
