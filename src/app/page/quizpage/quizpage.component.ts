import { Component } from '@angular/core';
import { HeadingComponent } from '../../components/heading/heading.component';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import swal from 'sweetalert2';

@Component({
  selector: 'app-quizpage',
  standalone: true,
  imports: [RouterLink, HeadingComponent, FormsModule, CommonModule],
  templateUrl: './quizpage.component.html',
  styleUrl: './quizpage.component.css'
})
export class QuizpageComponent {
  public quiz: any = {
    quiz_id: "",
    player_id: "",
    date: "",
    grade: "",
    mark: 0,
    words: []
  };
  public player:any ={
    id: 0,
    name: "",
    email: "",
    password: "",
    gender: "",
    marks: 0,
  }
  public i: any = 0;
  public total:any = 0;
  public id:any = 0;

  public answer: String = "";
  public question: String = "";
  constructor(private http: HttpClient, private router:Router) {
    this.http.get(`http://localhost:8080/player/get-player-name/${localStorage.getItem("Name")}`).subscribe((data)=>{
      this.player = data;
      this.getQuiz();
    });
    
  }

  public getQuiz() {
    if (this.quiz.quiz_id == "") {
      this.http.get(`http://localhost:8080/quiz/create-quiz/${this.player.id}`).subscribe((data) => {
        this.quiz = data;
        this.start();
      });
    }
  }
  public start() {
    if (this.i < 10) {
      this.question = this.quiz.words[this.i].name;
      this.i++;
    }
    else{
      this.finished();
    }
  }
  public check() {
    if (this.quiz.words[this.i - 1].pronunciation == this.answer) {
      this.showMessage("Correct!");
      this.quiz.words[this.i-1].status = "Correct";
      this.total+=1;
    }
    else {
      this.showError("Incorrect!");
      this.quiz.words[this.i-1].status = "Incorrect";
    }
    const textField = document.getElementById('answer') as HTMLInputElement
    textField.value = "";
    this.start()
  }
  public finished(){
    this.quiz.mark = this.total;
    this.quiz.grade = this.checkGrade(this.total);
    this.http.post("http://localhost:8080/quiz/add-quiz",this.quiz).subscribe(data=>{
      this.quiz ={
        quiz_id: "",
        player_id: "",
        date: "",
        grade: "",
        mark: 0,
        words: []
      };
      this.showMessage("Quiz Completed");
      this.router.navigate(["../dashboard"]);
      this.player.marks+=this.total;
      this.http.put("http://localhost:8080/player/update-player",this.player).subscribe(data=>{
        
      })
    });
    
  }

  public checkGrade(number:any):any{
    if(number>8){
      return "A";
    }
    else if(number>6){
      return "B";
    }
    else if(number>4){
      return "C";
    }
    else if(number>2){
      return "S";
    }
    else{
      return "F";
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
