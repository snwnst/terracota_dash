import { Component } from '@angular/core';
import { AppService } from './app.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private service: AppService
  ) {
    //this.service.login({username:"nmartinez",password:"TerraNM14.#"});
    //this.service.getStatusSession();
  }

  

}
