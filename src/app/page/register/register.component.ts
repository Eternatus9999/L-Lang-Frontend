import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink} from '@angular/router';
import swal from 'sweetalert2';

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
  constructor(private http:HttpClient,private router:Router){}

  public sendName(){
    console.log("Hello");
    
     if(this.name === ""){
      this.showError("Enter an Username");
     }
     else if(this.email === ""){
      this.showError("Enter an Email");
     }
     else if(this.password === ""){
      this.showError("Enter a Password");
     }
     else if(!(this.password === this.check_password)){
      this.showError("Password doesn't match");
     }
     else if(this.gender === ""){
      this.showError("Select a Gender");
     }
     else{
      this.player.name = this.name;
      this.player.email = this.email;
      this.player.password = this.password;
      this.player.gender = this.gender;
      
      this.http.post("http://localhost:8080/player/add-player",this.player).subscribe(data=>{
        this.showMessage("Register Successfull");
        localStorage.setItem("Name",this.name);
        this.router.navigate(["/dashboard"]);
      });
    }
  }

  private showMessage(message: string){
    swal.fire({
      title: message,
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }
  private showError(message: string) {
    swal.fire({
      title: message,
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
}
