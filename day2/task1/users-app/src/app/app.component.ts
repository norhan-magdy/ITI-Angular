import { Component } from '@angular/core';
import { UsersListComponent } from "./users-list/users-list.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  imports: [ UsersListComponent, NgbModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'users-app';
}
