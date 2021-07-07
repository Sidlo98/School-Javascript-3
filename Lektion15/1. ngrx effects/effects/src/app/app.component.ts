import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadTodos } from 'src/store/actions/todoList.actions';
import { IAppState } from 'src/store/models/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loading$: Observable<Boolean> | undefined;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadTodos());
    this.loading$ = this.store.select((state) => state.todoList.loading);
  }
}
