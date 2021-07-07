import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/store/models/todo.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private _baseUrl = 'http://localhost:3000/todos/';

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get<Todo[]>(this._baseUrl).pipe(delay(2000));
  }

  addTodo(todo: Todo) {
    return this.http.post(this._baseUrl, todo).pipe(delay(2000));
  }

  deleteTodo(id: string) {
    return this.http.delete(`${this._baseUrl}${id}`).pipe(delay(2000));
  }
}
