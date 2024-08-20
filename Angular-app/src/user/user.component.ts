import { Component, computed, Input, input, Output, EventEmitter } from '@angular/core';
// import { DUMMY_USERS } from '../app/dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
//  selectedUser = signal(DUMMY_USERS[randomIndex]);

//[this one is also signals method]
//  imagePath = computed(() => {
//   return this.avatar()
//  });
  
 
 get imagePath() {
  return this.avatar
 }
@Input({ required: true }) avatar!: string;
@Input({ required: true }) name!: string;
@Output() select = new EventEmitter()
//Signals method : 
//  avatar = input.required<string>();
//  name = input.required<string>();
 onSelectUser() {
  // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
  // this.selectedUser.set(DUMMY_USERS[randomIndex]);
 }
}


