import { Component, OnInit } from '@angular/core';
import { User } from '../core/Model/user';
import { UserService } from '../core/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user!: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => {
      this.user = user;
      console.log(user);
    });
  
  }

}
