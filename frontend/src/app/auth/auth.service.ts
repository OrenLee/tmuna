import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

const BACKEND_URL = 'http://localhost:8080/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authModalListener = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  createUser(username: string, password: string): void {
    this.http.post(BACKEND_URL, { username, password }).subscribe(
      () => {
        console.log('success in GET METHOD!!!!!!!!!!!!!!!');
      },
      error => {
        console.log('error in GET METHOD');
      }
    );
  }

  /* login(username: string, password: string): boolean {
    this.http.get(BACKEND_URL, { username, password }).subscribe(
        () => {
          return true;
        },
        error => {
          console.log('Error in Get');
          return false;
        }
    );
    return false;
  }*/

  openSignup(): void {
    console.log('In sign up service auth');
  }

  getModalStatus(): Observable<boolean> {
    return this.authModalListener.asObservable();
  }

  openModal(): void {
    console.log('open modal service');
    this.authModalListener.next(true);
  }
}
