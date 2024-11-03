import { Component } from '@angular/core';
import { HeadingComponent } from '../../components/heading/heading.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-viewform',
  standalone: true,
  imports: [HeadingComponent,RouterLink],
  templateUrl: './viewform.component.html',
  styleUrl: './viewform.component.css'
})
export class ViewformComponent {

}
