import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-viewquizform',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './viewquizform.component.html',
  styleUrl: './viewquizform.component.css'
})
export class ViewquizformComponent {
  public player:any = {
    id:"",
    name:"",
    email:"",
    password:"",
    gender: "",
    marks: 0
  }
  constructor(http:HttpClient){
    http.get(`http://localhost:8080/player/get-player-name/${localStorage.getItem("Name")}`).subscribe((data)=>{
      this.player = data;
      http.get(`http://localhost:8080/quiz/get-quiz-by-player/${this.player.id}`).subscribe((data)=>{
        console.log(data);
      });
    })
  }
}
