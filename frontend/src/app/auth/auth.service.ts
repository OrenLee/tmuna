import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { User } from './user.model';

const BACKEND_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

  createUser(email: string, password: string): void {
    this.http.post(BACKEND_URL + '/signup', { email, password }).subscribe(
      response => {
        this.router.navigate(['/imageUpload']);
        this.authStatusListener.next(true);
        console.log('response create: ' + response);
        console.log('success in GET METHOD!!!!!!!!!!!!!!!');
      },
      error => {
        this.authStatusListener.next(false);
        console.log('error in GET METHOD');
      }
    );
  }

  getUser(): User {
    return this.currentUser;
  }

  login(email: string, password: string): void {
    console.log('email: ' + email);
    this.http.post(BACKEND_URL + '/login', { email, password }).subscribe(
        (response: User) => {
          console.log('login success!');
          this.authStatusListener.next(true);
          console.log('response login: ' + JSON.stringify(response));
          this.currentUser = response;
          this.router.navigate(['/']); // Change To myImages
        },
        error => {
          console.log('login failed!');
          this.authStatusListener.next(false);
        }
    );
  }

  getAuthStatusListener(): Observable<boolean> {
    return this.authStatusListener.asObservable();
  }

  logout(): void {
    this.authStatusListener.next(false);
    this.router.navigate(['/imageUpload']);
  }
}
