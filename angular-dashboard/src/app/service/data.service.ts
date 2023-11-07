import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  insertData(data:any) {
    return this.httpClient.post(`http://127.0.0.1:8000/api/signUp`, data);
  }
  getUsersByEmailAndPassword(email: any, password: any) {
    return this.httpClient.get(`http://127.0.0.1:8000/api/users/${email}/${password}`);
  } 
  getUsers() {
    return this.httpClient.get(`http://127.0.0.1:8000/api/getDataUsers`);
  }
}
