import { Component } from '@angular/core';
import { HeadingComponent } from '../../components/heading/heading.component';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quizpage',
  standalone: true,
  imports: [RouterLink,HeadingComponent],
  templateUrl: './quizpage.component.html',
  styleUrl: './quizpage.component.css'
})
export class QuizpageComponent {
  public quiz:any;
  constructor(private http:HttpClient){
  }
  
  public getQuiz(){
    this.http.get("http://localhost:8080/quiz/create-quiz/P001").subscribe((data)=>{
      this.quiz = data;
      console.log(this.quiz);
      
    });
  }
}
