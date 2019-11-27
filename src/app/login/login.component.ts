import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.services';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Login } from 'app/app.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  public year_now: string = new Date().getFullYear().toString();
  public visibility_icon: boolean;
  public password_type: string;
  public loginform: FormGroup;
  public logindata: Login;

  constructor(
    public api: AppService,
    public formBuilder: FormBuilder) {
   
    this.showVisibilitPassword();
  }

  ngOnInit() {
    this.logindata = new Login();
    this.loginform = this.formBuilder.group({
      username: [this.logindata.username, [Validators.required]],
      password: [this.logindata.password, [Validators.required]]
    });
  }

  showVisibilitPassword() {
    this.password_type = (this.visibility_icon) ? "text" : "password";
    this.visibility_icon = !this.visibility_icon
  }

  login() {    
    this.api.login(this.loginform.value);
  }


}
