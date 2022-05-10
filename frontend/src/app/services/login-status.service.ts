import { Injectable } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {

  userFullName: string;
storage: Storage = sessionStorage;
isAuthenticated: boolean = false;
constructor(public oktaAuthService: OktaAuthService) { }
subscribe(): boolean {
  // Subscribe to authentication state changes
  this.oktaAuthService.$authenticationState.subscribe(
    (result) => {
      this.isAuthenticated = result;
      this.getUserDetails();
    }
  );
  return this.isAuthenticated
}
getUserDetails() {
  if (this.isAuthenticated) {
    // Fetch the logged in user details (user's claims)
    //
    // user full name is exposed as a property name
    this.oktaAuthService.getUser().then(
      (res) => {
        this.userFullName = res.name;
        // retrieve the user's email from authentication response
        const theEmail = res.email;
        // now store the email in browser storage
        this.storage.setItem('userEmail', JSON.stringify(theEmail));
        const theGroups = res['groups'];
        this.storage.setItem('isAdmin', theGroups.includes('Admin'));
        console.log(res);
      }
    );
  }
}
logout() {
  // Terminates the session with Okta and removes current tokens.
  this.oktaAuthService.signOut();
  this.storage.clear();
}
}
