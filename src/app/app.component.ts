import { Component, OnInit } from '@angular/core';
import { UserinfoService } from './services/userinfo.service';
import { Router } from '@angular/router';
import { environment } from '@envi';
import { LogfacService } from './services/logfac.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLogIn = false;
  isLogOn = false;
  envi = '';
  currentRoute = '';
  constructor(private userService: UserinfoService
    , private route: Router
    , private logger: LogfacService
  ) {
    // console.log(window.location.href);
  }

  ngOnInit() {
    //this.isLogIn = this.userService.userIsLogin;
    // this.isLogIn = true;
    //this.envi = environment.envi;
    console.log('AppComponent');
    if (window.location.href.toUpperCase().includes('LOGON')) {
      this.isLogOn = true;
    }

  }

}

