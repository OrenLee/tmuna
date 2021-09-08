import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { ImplicitReceiver } from '@angular/compiler';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('content') content: ElementRef<HTMLInputElement>;
  closeResult = '';

  constructor(private modalService: NgbModal, private authService: AuthService ) {}

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
