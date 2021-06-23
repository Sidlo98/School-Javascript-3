import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoComponent } from './components/todo/todo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodosListComponent,
    AddTodoComponent,
    TodoComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
