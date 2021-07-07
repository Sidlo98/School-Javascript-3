import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo } from 'src/store/actions/todoList.actions';
import { IAppState } from 'src/store/models/app.state';
import { Todo } from 'src/store/models/todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  public todo: Todo = {
    id: '',
    title: '',
    completed: false,
  };

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {}

  addTodo() {
    this.todo.id = Date.now().toString();
    this.store.dispatch(addTodo({ payload: this.todo }));
    this.todo = {
      id: '',
      title: '',
      completed: false,
    };
  }
}
