import { Component } from '@angular/core';
import { HeadingComponent } from '../../components/heading/heading.component';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-wordviewform',
  standalone: true,
  imports: [HeadingComponent, RouterLink, FormsModule, CommonModule],
  templateUrl: './wordviewform.component.html',
  styleUrl: './wordviewform.component.css'
})
export class WordviewformComponent {

  public word_name: String = "";

  public word: any = {
    word_id: 0,
    name: "",
    pronunciation: ""
  };

  constructor(private http: HttpClient) {};

  public search(){
    this.http.get(`http://localhost:8080/word/get-word-name/${this.word_name}`).subscribe((data) => {
      this.word = data;
    });
  }

}
