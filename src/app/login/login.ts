import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Add this


@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = '';
  password = '';
  error = '';

  private users = [
    { email: 'test@test.com', password: 'test' },
    { email: 'test2@test.com', password: 'test2' },
    { email: 'test3@test.com', password: 'test3' }
  ];

  constructor(private router: Router) {}

  login() {
    //clear previous error
    this.error = '';

    const user = this.users.find(u =>
      u.email === this.email && u.password === this.password
    );

    if (user) {
      this.router.navigateByUrl('/profile');
    } else {
      this.error = 'Invalid email or password';
    }
  }

}
