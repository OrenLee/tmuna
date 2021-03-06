import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService ) {}

  ngOnInit(): void {
  }

  onSignup(form: NgForm): void{
    if (form.invalid) {
      return;
    }
    this.authService.createUser(form.value.email, form.value.password);
    console.log(form.value.email, form.value.password);
  }

}
