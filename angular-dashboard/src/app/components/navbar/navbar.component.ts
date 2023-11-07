import { DataService } from './../../service/data.service';
import { Component } from '@angular/core';
import { signupData } from 'src/app/signup';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  signup = new signupData();

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }
  
  insertData() {
    this.dataService.getUsersByEmailAndPassword(this.signup.email,this.signup.password).subscribe(res => {
      if(res){
        console.log('User Exist');
      }
    },(error) => {
      if(error.status === 404){
        this.dataService.insertData(this.signup).subscribe(res => { })
      }else {
        console.log('An error occured', error);
      }
    });
  }
}
