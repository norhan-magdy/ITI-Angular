import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   landing:string = "assets/1.jpg";
   userName:string = "Norhan Magdy"
   description:string = "software engineer full stack"

}
