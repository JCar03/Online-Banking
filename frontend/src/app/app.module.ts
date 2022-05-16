import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule, Router} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { BetweenAccountsComponent } from './components/between-accounts/between-accounts.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { LoginComponent } from './components/login/login.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { PrimaryAccountComponent } from './components/primary-account/primary-account.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RecipientComponent } from './components/recipient/recipient.component';
import { SavingsAccountComponent } from './components/savings-account/savings-account.component';
import { ToSomeoneElseComponent } from './components/to-someone-else/to-someone-else.component';
import { UserFrontComponent } from './components/user-front/user-front.component';
import { WithdrawalComponent } from './components/withdrawal/withdrawal.component';

import { AuthInterceptorService } from './services/auth-interceptor.service';


import {
  OKTA_CONFIG,
  OktaAuthModule,
  OktaCallbackComponent,
  OktaAuthGuard
} from '@okta/okta-angular';

import myAppConfig from './config/my-app-config';

const oktaConfig = Object.assign({
  onAuthRequired: (oktaAuth, injector) => {
    const router = injector.get(Router);
    //router.navigate(['/login']);
  }
}, myAppConfig.oidc);

const routes: Routes = [
 // {path: 'order-history', component: OrderHistoryComponent, canActivate: [ OktaAuthGuard ]},
 // {path: 'members', component: MembersPageComponent, canActivate: [ OktaAuthGuard ]},

  {path: 'login/callback', component: OktaCallbackComponent},
  //{path: 'login', component: LoginComponent},

  {path: 'account/primaryAccount', component: PrimaryAccountComponent},
  {path: 'account/savingsAccount', component: SavingsAccountComponent},
  {path: 'account/deposit', component: DepositComponent},
  {path: 'account/withdraw', component: WithdrawalComponent},
  {path: 'transfer/betweenAccounts', component: BetweenAccountsComponent},
  {path: 'transfer/toSomeoneElse', component: ToSomeoneElseComponent},
  {path: 'transfer/recipient', component: RecipientComponent},
  {path: 'appointment/create', component: AppointmentComponent},
  {path: 'user/profile', component: ProfileComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    AppointmentComponent,
    BetweenAccountsComponent,
    DepositComponent,
    PrimaryAccountComponent,
    ProfileComponent,
    RecipientComponent,
    SavingsAccountComponent,
    ToSomeoneElseComponent,
    UserFrontComponent,
    WithdrawalComponent,
    LoginComponent,
    LoginStatusComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    OktaAuthModule
  ],
  providers: [{ provide: OKTA_CONFIG, useValue: oktaConfig },
              {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
