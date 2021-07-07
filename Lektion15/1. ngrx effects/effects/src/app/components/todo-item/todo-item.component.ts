import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteTodo } from 'src/store/actions/todoList.actions';
import { IAppState } from 'src/store/models/app.state';
import { Todo } from 'src/store/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo?: Todo;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {}

  deleteTodo(id: string | undefined) {
    if (id) this.store.dispatch(deleteTodo({ payload: id }));
  }
}
