import { CommonModule } from '@angular/common';
import { Component,  EventEmitter,  Output } from '@angular/core';

@Component({
  selector: 'app-users-search',
  imports: [CommonModule],
  templateUrl: './users-search.component.html',
  styleUrl: './users-search.component.css'
})
export class UsersSearchComponent {
  @Output() sendToParent = new EventEmitter<string>();
  @Output() resetListEvent = new EventEmitter<void>();


  handleSearch(email: string) {
    this.sendToParent.emit(email);
  }

  handleReset() {
    this.resetListEvent.emit();
  }
}
