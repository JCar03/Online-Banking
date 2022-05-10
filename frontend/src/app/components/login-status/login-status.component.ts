import { Component, Inject, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { mainModule } from 'process';
import { AppComponent } from 'src/app/app.component';
import { LoginStatusService } from 'src/app/services/login-status.service'




@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {
  isAuthenticated: boolean;
  constructor(private loginStatusService: LoginStatusService){
    this.isAuthenticated = loginStatusService.isAuthenticated;
  }

  ngOnInit(): void {
    this.isAuthenticated = this.loginStatusService.subscribe();
  }

  logout(): void{
    this.loginStatusService.logout();
  }




}
