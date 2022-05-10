import { Component } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { LoginStatusService } from './services/login-status.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-banking';
  isAuthenticated: boolean;
  constructor(private loginStatusService: LoginStatusService){
    this.isAuthenticated = loginStatusService.subscribe();
  }

  
  
  
  
  
  
  
  





}
