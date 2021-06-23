import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from 'src/app/models/ITodo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo?: ITodo;
  @Output() onDelete: EventEmitter<ITodo> = new EventEmitter();

  constructor(private ts: TodoService) {}

  ngOnInit(): void {}

  deleteTodo(todo: ITodo) {
    this.onDelete.emit(todo);
  }

  toggleComplete(todo: ITodo) {
    todo.completed = !todo.completed;
    this.ts.toggleComplete(todo).subscribe((data) => {
      console.log(data);
    });
  }
}
