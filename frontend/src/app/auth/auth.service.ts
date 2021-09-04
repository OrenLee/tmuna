import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BACKEND_URL = 'http://localhost:8080/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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
}
