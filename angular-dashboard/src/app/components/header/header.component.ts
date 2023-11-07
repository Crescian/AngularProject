import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private loginService: LoginService, 
    private router: Router) {}

  get isLoggedIn(): boolean {
    return this.loginService.getLoggedInStatus();
  }
  logout() {
    this.router.navigate(['login']);
    this.loginService.logout();
  }
  
}
