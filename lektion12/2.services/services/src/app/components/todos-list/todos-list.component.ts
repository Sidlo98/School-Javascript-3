import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/ITodo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css'],
})
export class TodosListComponent implements OnInit {
  todos: ITodo[] = [];

  constructor(private ts: TodoService) {}

  ngOnInit(): void {
    // this.todos = [
    //   { id: 1, title: 'Todo One', completed: false },
    //   { id: 2, title: 'Todo Two', completed: true },
    //   { id: 3, title: 'Todo Three', completed: false },
    // ];

    // this.todos = this.ts.getTodos()

    this.getTodos();
  }

  getTodos() {
    this.ts.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  newTodo(todo: ITodo) {
    this.ts.addTodo(todo).subscribe(() => {
      this.getTodos();
    });
  }

  delteTodo(todo: ITodo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
    this.ts.deleteTodo(todo).subscribe(() => {
      // this.getTodos();
    });
  }
}
