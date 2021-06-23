import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITodo } from '../models/ITodo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  private baseUrl: string = 'http://localhost:3000';

  getTodos() {
    // return [
    //   { id: 1, title: 'Todo One', completed: false },
    //   { id: 2, title: 'Todo Two', completed: true },
    //   { id: 3, title: 'Todo Three', completed: false },
    // ];
    return this.http.get<ITodo[]>(this.baseUrl + '/todos');
  }

  addTodo(todo: ITodo) {
    return this.http.post<ITodo[]>(this.baseUrl + '/todos', todo);
  }

  deleteTodo(todo: ITodo) {
    return this.http.delete<ITodo[]>(this.baseUrl + '/todos' + `/${todo.id}`);
  }

  toggleComplete(todo: ITodo) {
    return this.http.patch<ITodo[]>(
      this.baseUrl + '/todos' + `/${todo.id}`,
      todo
    );
  }
}
