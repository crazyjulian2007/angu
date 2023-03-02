import { Component, OnInit } from '@angular/core';
import { UserinfoService } from './services/userinfo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLogIn = false;

  constructor(private userService: UserinfoService) {

  }

  ngOnInit() {
    //this.isLogIn = this.userService.userIsLogin;
    this.isLogIn = true;
    console.log('AppComponent');
  }

}

