import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn: boolean = false;

  setLoggedInStatus(value: boolean) {
    this.isLoggedIn = value;
  }

  getLoggedInStatus() {
    return this.isLoggedIn;
  }
  logout() {
    this.setLoggedInStatus(false);
  }
  haveaccess(){
    return true;
  }

  constructor() { }
}
