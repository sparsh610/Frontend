import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) {}

  saveUser(){
    console.log('in service');
    this.http.get('http://localhost:8080/saveUser').subscribe();
    console.log('end in service');
  }
}
