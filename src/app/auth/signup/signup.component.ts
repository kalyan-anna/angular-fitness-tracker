import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  maxDate = new Date();
  minDate = new Date();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.minDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.authService.registerUser({
        email: form.value.email,
        password: form.value.password
      });
    }
  }
}
