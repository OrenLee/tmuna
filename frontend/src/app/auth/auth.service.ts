import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BACKEND_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  createUser(email: string, password: string): void{
    this.http.get(BACKEND_URL).subscribe(
      () => {
        console.log('success in GET METHOD!!!!!!!!!!!!!!!');
      },
      error => {
        console.log('error in GET METHOD');
      }
    );
  }
}
