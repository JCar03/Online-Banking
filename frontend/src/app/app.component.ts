import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-banking';
  isAuthenticated: boolean = false;

  public get getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
  public set setIsAuthenticated(value: boolean) {
    this.isAuthenticated = value;
  }


  
  
  

  
  
  
}
