import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: '../html/app.component.html',
  styleUrl: '../scss/app.component.scss'
})
export class AppComponent {
  title = 'my-app';
}
