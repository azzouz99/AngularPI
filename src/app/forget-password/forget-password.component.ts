import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/service/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  email!:string;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.sendResetPasswordEmail(this.email)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
      

  }

}
