import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/service/user.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
password!: string;
passwordConfirm!:string
  constructor(private userService:UserService,private router:Router    ) { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    this.userService.resetPassword(this.password)
      .subscribe(
        response =>
          console.log(response),
          

          // Redirection vers la page de connexion après la fermeture de la notification
      
        
        error => console.log(error)
      );
      

  }
 
 
}
