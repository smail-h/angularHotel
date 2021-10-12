import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error : boolean = false;

  u = {
    username: "",
    password: ""
  };

  constructor(private us: UserService , private router : Router ) { }

  ngOnInit(): void {
  }

  authenticate() {
    this.us.authenticate(this.u).subscribe(
      data=>{

        if (data.id > 0) {
          sessionStorage.setItem("connectedUser", data.username);
          this.router.navigate(['hotel'])
        }else{
          this.error = true;
        }
      } ,
      error => {
        this.error = true;
      }
    );
  }

}
