import { Component, computed, Input, input, Output, output, EventEmitter } from '@angular/core';
// import { DUMMY_USERS } from '../app/dummy-users';
import { User } from './user.model'
// type User = {
//     id: string;
//     name: string;
//     avatar: string
// }
//two types we can use either type or interface
// interface User {
//     id: string;
//     name: string;
//     avatar: string
// }

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
  return this.user.avatar
 }
// @Input({required: true}) id!: string;
// @Input({ required: true }) avatar!: string;
// @Input({ required: true }) name!: string;
   @Output() select = new EventEmitter()
   @Input({required: true}) user!: User
   @Input({required:true}) selected!: boolean;
// select = output<string>();
//Signals method : 
//  avatar = input.required<string>();
//  name = input.required<string>();
 onSelectUser() {
  // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
  // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  this.select.emit(this.user.id);
 }
}


