import { Component, VERSION } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  usersList: User[];
  constructor() {
    this.usersList = [
      new User(1, 'rahul', 9561030556, 'Beed'),
      new User(2, 'Rahul Bhawar', 95632430556, 'Beed'),
      new User(3, 'Johan Day', 95603423551, 'Pune'),
      new User(4, 'Mack Book', 9560342552, 'Mumbai'),
      new User(5, 'Dark Shock', 9563247553, 'Delhi'),
    ];
  }
}
