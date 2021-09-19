import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signInData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly mockuser = new SignInData('test', 'test');
  isAuthenticated = false;

  constructor(private route: Router) { }

  authenticate(signInData: SignInData): boolean {
    if(this.checkCred(signInData)) {
      this.isAuthenticated = true;
      if(this.isAuthenticated) {
        this.route.navigate(['home']);
      }
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCred(signInData: SignInData): boolean {
    return this.checkUserName(signInData.getUserName()) && this.checkPassword(signInData.getPassword());
  }

  private checkUserName(userName: string): boolean {
    return userName === this.mockuser.getUserName();
  }

  private checkPassword(password: string): boolean {
    return password === this.mockuser.getPassword();
  }

  logout() {
    this.isAuthenticated = false;
    this.route.navigate(['']);
  }
}
