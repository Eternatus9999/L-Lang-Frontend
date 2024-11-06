import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeadingComponent } from '../../components/heading/heading.component';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink,HeadingComponent,NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  public player:any = [];

  constructor(http:HttpClient){
    this.player = http.get("http://localhost:8080/player").subscribe((data)=>{
      this.player = data;
    });
  }
}