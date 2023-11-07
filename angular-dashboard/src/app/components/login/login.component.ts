import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { signupData } from 'src/app/signup';
import { DataService } from './../../service/data.service';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  signup = new signupData();

  constructor(
    private dataService: DataService, 
    private router: Router,
    private cdRef: ChangeDetectorRef, 
    private loginService: LoginService,) { }

  login() {
    this.dataService.getUsersByEmailAndPassword(this.signup.email,this.signup.password).subscribe(res => {
      
      this.router.navigate(['client/home']);
      this.loginService.setLoggedInStatus(true);
      this.cdRef.detectChanges();

      console.log('Log in successfully');
    },(error) => {
      if(error.status === 404){
        console.log('User not found')
      }else {
        console.log('An error occured', error);
      }
    });
  }
}
