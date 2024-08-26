import { Component } from '@angular/core';
import { UserComponent } from '../../src/user/user.component'
import { HeaderComponent } from './header.component';
import { TasksComponent } from '../../src/tasks/tasks.component'
import { DUMMY_USERS } from './dummy-users';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, NgFor, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!
  }

  onSelectUser(id: string){
    //console.log('Selected user with id ' + id)
    this.selectedUserId = id;
    }
}
