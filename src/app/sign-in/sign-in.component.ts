import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/service/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  error: any;
  email!: string;
  user_password!: string;
  constructor(private userService:UserService,private route:Router) { }

  ngOnInit(): void {
 
  }
  login() {
const data ={
  email:this.email,
  user_password:this.user_password
};
console.log(data)
this.userService.login(data).subscribe(
  response => {
    if(data.email ==='admin') {
    this.route.navigate(["/home"]);}
    else {
      this.route.navigate([""]);}
      console.log(response);
    
  },
  error => {
    console.log(error);
  }
);
  }
   rotateCard() {
    const card = document.querySelector('.card');
    if (card) {
      card.classList.toggle('rotate-card');
    }
    
  }
  
  

}

