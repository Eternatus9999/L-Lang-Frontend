import { Component } from '@angular/core';
import { HeadingComponent } from '../../components/heading/heading.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addword',
  standalone: true,
  imports: [HeadingComponent,FormsModule,CommonModule],
  templateUrl: './addword.component.html',
  styleUrl: './addword.component.css'
})
export class AddwordComponent {
  public word:any ={
    pronunciation: "",
    name: ""
  };

  constructor(private http:HttpClient){}

  public add(){
    this.http.post("http://localhost:8080/word/add-word",this.word).subscribe(data=>{
      alert("Word added Successfully!");
    });
  }
}
