import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  public name:any = "";
  public email:any = "";
  public password:any = "";
  public check_password:any = "";
  public gender:any = "";
  public player:any = {
    name:"",
    email:"",
    password:"",
    gender:"",
    marks:0
  }
  constructor(http:HttpClient){}

  public sendName(){
    console.log("Hello");
    
    // if(this.name === ""){

    // }
    // else if(this.email === ""){

    // }
    // else if(this.password === ""){

    // }
    // else if(this.password === this.check_password){

    // }
    // else if(this.gender === ""){

    // }
    // else{
      this.player.name = this.name;
      this.player.email = this.email;
      this.player.password = this.password;
      this.player.gender = this.gender;
      console.log(this.player);
      
    // }
  }
}
