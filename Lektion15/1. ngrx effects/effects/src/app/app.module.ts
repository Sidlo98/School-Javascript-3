import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FormsModule } from '@angular/forms';
import { todoListReducer } from 'src/store/reducers/todo.reducer';
import { TodosEffect } from 'src/store/effects/todos.effect';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodoListComponent,
    TodoItemComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(
      {
        todoList: todoListReducer,
      },
      {}
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([TodosEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
