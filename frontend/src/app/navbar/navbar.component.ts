import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userIsAuthenticated: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getAuthStatusListener().subscribe(
      () =>
          this.userIsAuthenticated = !this.userIsAuthenticated
      );
  }

  openSignUp(): void {
    console.log('Navbar Signup opening');
  }

  logout(): void {
    this.authService.logout();
  }

}
