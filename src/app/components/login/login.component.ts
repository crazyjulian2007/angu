import { Component, OnInit, Input } from '@angular/core';
import { UserinfoService } from 'src/app/services/userinfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() isLogIn:boolean = false;

  isPwd = false;
  isId = false;
  id = '';
  pwd = '';

  constructor(private route:Router) { }

  ngOnInit(): void {
    //this.isLogIn = true;
    console.log('LoginComponent');
  }
  change(id: string, pwd: string) {

    this.reset();

    if (id === '') {
      this.isId = true;
    }
    if (pwd === '') {
      this.isPwd = true;
    }

    console.log('id : ' + id + ' pwd : ' + pwd);
    //this.isLogIn = this.userService.userIsLogin;
  }
  reset() {
    this.isId = false;
    this.isPwd = false;
  }
}
