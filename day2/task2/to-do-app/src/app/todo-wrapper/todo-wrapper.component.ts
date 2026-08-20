import { Component } from '@angular/core';
import { TodoFormComponent } from "../todo-form/todo-form.component";
import { TodoListComponent } from "../todo-list/todo-list.component";

@Component({
  selector: 'app-todo-wrapper',
  imports: [TodoFormComponent, TodoListComponent],
  templateUrl: './todo-wrapper.component.html',
  styleUrl: './todo-wrapper.component.css'
})
export class TodoWrapperComponent {
  tasks: string[] = [];

  receiveFromChild(newTask: string): void {
    this.tasks.push(newTask);
  }
}
