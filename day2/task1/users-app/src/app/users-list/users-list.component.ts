import { Component } from '@angular/core';
import data from '../../../users.json';
import { UsersCardComponent } from "../users-card/users-card.component";
import { UsersSearchComponent } from "../users-search/users-search.component";

@Component({
  selector: 'app-users-list',
  imports: [UsersCardComponent, UsersSearchComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  users: any = data;


  recevieFromChild(email:string) {
    this.users = this.users.filter((user:any) => user.email.includes(email));
  }


  resetList() {
    console.log('Resetting list...');
    this.users = [...data];
  }
}
