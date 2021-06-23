import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/ITodo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<ITodo> = new EventEmitter();

  public title: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSub() {
    const todo: ITodo = {
      title: this.title,
      completed: false,
    };

    this.addTodo.emit(todo);
    this.title = '';
  }
}
