import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent {

  public name:any;
  constructor(){
    this.name = localStorage.getItem("Name")!=null?localStorage.getItem("Name"):"User";
  }

}
