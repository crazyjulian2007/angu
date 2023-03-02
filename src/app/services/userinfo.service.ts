import { Injectable } from '@angular/core';
import { UserInfo } from './../models/userinfo';
import { BaseRpModel } from './../models/baserpmodel'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  userIsLogin: boolean = false;
  constructor(private http: HttpClient) {

  }

  getUser(url: string, user: UserInfo) {
    // return this.http.post<{ response: BaseRpModel }>(url, user);
    // sessionStorage.getItem('123');
  }

  setUser(username: string) {
    // sessionStorage.setItem('123', username);

  }
}
