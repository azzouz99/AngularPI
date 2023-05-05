import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService:UserService,private route:Router) { }

  ngOnInit(): void {}
   logout(){
    localStorage.removeItem("Token");
    console.log("success!");
    // this.userService.logout().subscribe(() => {
    //   console.log("hi")
    //   this.route.navigate(["/signin"]);
    // });
  }

}
