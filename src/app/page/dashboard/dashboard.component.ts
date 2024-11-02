import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeadingComponent } from '../../components/heading/heading.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink,HeadingComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
}
