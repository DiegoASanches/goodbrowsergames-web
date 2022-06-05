import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

export interface User {
	_id: string;
	name: string;
	email: string;
	roles: string[];
	createdAt: string;
	updatedAt: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  users: User[];
  constructor(private user: UserService) { }

  ngOnInit(): void {
    this.user.getUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }

}
