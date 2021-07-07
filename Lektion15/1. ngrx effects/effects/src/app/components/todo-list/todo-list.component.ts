import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/store/models/app.state';
import { Todo } from 'src/store/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  // public todos: Todo[] = [
  //   {
  //     id: '1',
  //     title: 'Todo1',
  //     completed: false
  //   },
  //   {
  //     id: '2',
  //     title: 'Todo2',
  //     completed: true
  //   },
  // ]

  todos$: Observable<Todo[]> | undefined;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.todos$ = this.store.select((store) => store.todoList.list);
  }
}
