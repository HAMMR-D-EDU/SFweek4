import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  title = signal('Home'); //signals are used to store values that can be used in the template

}
