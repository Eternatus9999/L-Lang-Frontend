import { Component } from '@angular/core';
import { HeadingComponent } from '../../components/heading/heading.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-quizpage',
  standalone: true,
  imports: [RouterLink,HeadingComponent],
  templateUrl: './quizpage.component.html',
  styleUrl: './quizpage.component.css'
})
export class QuizpageComponent {

}
