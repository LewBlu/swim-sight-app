import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AuthService } from './auth/auth.service';
import { User } from './shared/models/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Swim Sight';

  showNavbar: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.userDetails$.subscribe((user: User | null) => {
      this.showNavbar = user ? true : false;
    });
  }
}
