import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  @Output() sendToParent = new EventEmitter<string>();

  // Emits the new task to the parent
  addTask(newTask: string): void {
    if (newTask.trim()) {
      this.sendToParent.emit(newTask.trim());
    }
  }
}
