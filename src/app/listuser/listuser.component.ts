import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/service/user.service';
import { User } from '../core/Model/user';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  constructor(private userService:UserService) { }
  userList!: User[];
  ngOnInit(): void {
    this.allUser();
  }
  allUser() {
    this.userService.getAll().subscribe((res) => {
      this.userList = res;
      console.log(res);
    });
  }
  deleteUser(id_user: any) {
    this.userService.delete(id_user).subscribe((data) => {
      console.log(data);
      this.allUser();
    });
  }
}
