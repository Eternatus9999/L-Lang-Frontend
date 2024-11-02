import { Component } from '@angular/core';
import { HeadingComponent } from '../../components/heading/heading.component';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quizpage',
  standalone: true,
  imports: [RouterLink,HeadingComponent,FormsModule,CommonModule],
  templateUrl: './quizpage.component.html',
  styleUrl: './quizpage.component.css'
})
export class QuizpageComponent {
  public quiz:any ={
    quiz_id: "",
    player_id: "",
    date: "",
    grade: "",
    mark: 0,
    words:[]
  };
  constructor(private http:HttpClient){
  }
  
  public getQuiz(){
    this.http.get("http://localhost:8080/quiz/create-quiz/P001").subscribe((data)=>{
      this.quiz = data;
      console.log(this.quiz.words);
    });
  }
}
