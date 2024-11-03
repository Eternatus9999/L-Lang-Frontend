import { Component } from '@angular/core';
import { HeadingComponent } from '../../components/heading/heading.component';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewform',
  standalone: true,
  imports: [HeadingComponent,RouterLink],
  templateUrl: './viewform.component.html',
  styleUrl: './viewform.component.css'
})
export class ViewformComponent {
  public player:any ={
    id:"",
    name:"",
    email:"",
    password:"",
    gender: "",
    marks: 0
  }

  constructor(private http:HttpClient){
    this.http.get(`http://localhost:8080/player/get-player-name/${localStorage.getItem("Name")}`).subscribe((data)=>{
      this.player = data;
    });
  }
}
