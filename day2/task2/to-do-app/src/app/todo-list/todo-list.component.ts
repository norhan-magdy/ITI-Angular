import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  imports:[CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() tasks: string[] = [];
  // tasks: string[] = [];

  // Receives new tasks from the child component
  receiveFromChild(newTask: string): void {
    this.tasks.push(newTask);
  }

  // Deletes a task
  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
