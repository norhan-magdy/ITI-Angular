import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-users-card',
  imports: [CommonModule],
  templateUrl: './users-card.component.html',
  styleUrl: './users-card.component.css'
})
export class UsersCardComponent {
  @Input() userData: any;
}
