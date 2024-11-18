import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HeadingComponent } from '../../components/heading/heading.component';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, HeadingComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public name: any = "";
  public password: any = "";
  public players: any = [];
  constructor(http: HttpClient, private router: Router) {
    http.get("http://localhost:8080/player").subscribe((data) => {
      this.players = data;
    });
  }
  public sendName() {
    for (let i = 0; i < this.players.length; i++) {
      const element = this.players[i];
      if (!(element.name == this.name)) {
        this.showError("Name Doesn't exist");
      }
      else if (!(element.password == this.password)) {
        this.showError("Wrong Password");
      }
      else {
        localStorage.setItem("Name", this.name);
        this.showMessage("Login Successfull");
        this.router.navigate(["/dashboard"]);
        break;
      }

    }
  }
  private showMessage(message: string) {
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
