import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.scss']
})
export class LogonComponent implements OnInit {

  id = '';
  isId = true;
  pwd = '';
  isPwd = true;
  email = '';
  isEmail = true;
  isAgree = true;
  isRpPwdSame = true;

  constructor() { }

  ngOnInit(): void {
    console.log('LogonComponent');
  }
  change(id: string, pwd: string, email: string, rpPwd: string, agree: string) {
    console.log('id : ' + id + ' pwd : ' + pwd);
    console.log('email : ' + email + ' rpPwd : ' + rpPwd);
    console.log('agree : ' + agree);

    this.reset();

    if (id === '') {
      this.isId = false;
    }
    if (pwd === '') {
      this.isPwd = false;
    }
    if (email === '') {
      this.isEmail = false;
    }
    if (rpPwd === '' || rpPwd != pwd) {
      this.isPwd = false;
    }
    if (agree === '0') {
      this.isPwd = false;
    }

    // console.log('id : ' + id + ' pwd : ' + pwd);
    //this.isLogIn = this.userService.userIsLogin;
  }
  reset() {
    this.isEmail = true;
    this.isId = true;
    this.isPwd = true;
    this.isAgree = true;
    this.isRpPwdSame = true;
  }
}
