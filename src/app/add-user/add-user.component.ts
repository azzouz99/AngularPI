import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../core/Model/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  avatarUrl!:String;

  constructor(private userService:UserService, private currentRoute: ActivatedRoute,private route: Router) { }
  user: User = new User(); 
  userList: User[] = []; 
  action: string = '';
  ngOnInit(): void {
    this.user = new User();
    let id = this.currentRoute.snapshot.params['id'];
    this.user.id_user = id;
    if (id != null) {
      //update
      
      //add
      this.action = 'add new';
      this.user = new User();
    
    this.userService.getAll().subscribe((data: User[]) => {
      this.userList = data;
    });
  }
  }
  saveUser(): void {
    let data = new User()
    data =  {
      id_user: this.user.id_user,
      user_firstname: this.user.user_firstname,
      user_lastname: this.user.user_lastname,
      email: this.user.email,
      user_password: this.user.user_password,
      role:this.user.role,
      profile_picture: this.user.profile_picture,
      user_phone: this.user.user_phone,
      sector_activite: this.user.sector_activite,
    };
    console.log(data);
    this.userService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.route.navigate(['/signin']);

        },
        error: (e) => console.error(e)
      });
  }
  onAvatarSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.avatarUrl = e.target.result;
    };
    reader.readAsDataURL(file);
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.avatarUrl = e.target.result;
    };
    reader.readAsDataURL(file);
  }
  

}
