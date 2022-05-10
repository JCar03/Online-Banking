import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { ProductService } from './services/product.service';

import { Routes, RouterModule, Router} from '@angular/router';
//import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
//import { SearchComponent } from './components/search/search.component';
//import { ProductDetailsComponent } from './components/product-details/product-details.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { CartStatusComponent } from './components/cart-status/cart-status.component';
//import { CartDetailsComponent } from './components/cart-details/cart-details.component';
//import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';

import {
  OKTA_CONFIG,
  OktaAuthModule,
  OktaCallbackComponent,
  OktaAuthGuard
} from '@okta/okta-angular';

import myAppConfig from './config/my-app-config';
//import { MembersPageComponent } from './components/members-page/members-page.component';
//import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { BetweenAccountsComponent } from './components/between-accounts/between-accounts.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { PrimaryAccountComponent } from './components/primary-account/primary-account.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RecipientComponent } from './components/recipient/recipient.component';
import { SavingsAccountComponent } from './components/savings-account/savings-account.component';
import { ToSomeoneElseComponent } from './components/to-someone-else/to-someone-else.component';
import { UserFrontComponent } from './components/user-front/user-front.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { fromEvent } from 'rxjs';

const oktaConfig = Object.assign({
  onAuthRequired: (oktaAuth, injector) => {
    const router = injector.get(Router);

    // Redirect the user to your custom login page
    router.navigate(['/login']);
  }
}, myAppConfig.oidc);

const routes: Routes = [
 // {path: 'order-history', component: OrderHistoryComponent, canActivate: [ OktaAuthGuard ]},
 // {path: 'members', component: MembersPageComponent, canActivate: [ OktaAuthGuard ]},
  {path: 'withdraw', component: WithdrawComponent},
  {path: 'login/callback', component: OktaCallbackComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user-front', component: UserFrontComponent},

/*   {path: 'checkout', component: CheckoutComponent},
  {path: 'cart-details', component: CartDetailsComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'search/:keyword', component: ProductListComponent},
  {path: 'category/:id', component: ProductListComponent},
  {path: 'category', component: ProductListComponent},
  {path: 'products', component: ProductListComponent}, */
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
/*     ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent, */
    LoginComponent,
    LoginStatusComponent,
    AppointmentComponent,
    BetweenAccountsComponent,
    DepositComponent,
    PrimaryAccountComponent,
    ProfileComponent,
    RecipientComponent,
    SavingsAccountComponent,
    ToSomeoneElseComponent,
    UserFrontComponent,
    WithdrawComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    OktaAuthModule,
  ],
  providers: [{ provide: OKTA_CONFIG, useValue: oktaConfig },
              {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
