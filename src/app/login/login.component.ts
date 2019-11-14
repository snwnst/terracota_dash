import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public aps: AppService) { }

  ngOnInit() {
  }

}
