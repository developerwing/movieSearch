import { Component } from '@angular/core';
import { MovieService } from './movies/movie.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MovieService]
})
export class AppComponent {
  title = 'Angular: Getting Started';
}
