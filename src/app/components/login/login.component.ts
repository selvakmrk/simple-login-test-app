import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInData } from 'src/app/model/signInData';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isFormInvalid = false;
  areCredentialsInvalid = false;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(signInForm: NgForm) {
    if(!signInForm.valid) {
      this.isFormInvalid = true;
      this.areCredentialsInvalid = false;
      return;
    }
    this.checkCred(signInForm);
  }

  private checkCred(signInForm: NgForm) {
    const signInData = new SignInData(signInForm.value.userName, signInForm.value.password);
    if(!this.auth.authenticate(signInData)) {
      this.isFormInvalid = false;
      this.areCredentialsInvalid = true;
    }
  }

}
