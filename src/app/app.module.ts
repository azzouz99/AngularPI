import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidbarComponent } from './sidbar/sidbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffersCreditComponent } from './offers-credit/offers-credit.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AddOfferComponent } from './add-offer/add-offer.component';
import { RequestComponent } from './request/request.component';
import { MatchingComponent } from './matching/matching.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ListuserComponent } from './listuser/listuser.component';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidbarComponent,
    NavbarComponent,
    OffersCreditComponent,
    AddOfferComponent,
    RequestComponent,
    MatchingComponent,
    SignInComponent,
    SignUpComponent,
    ListuserComponent,
    AddUserComponent,
    ProfileComponent,
    ForgetPasswordComponent,
    ResetpasswordComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    


  ],
  exports:[ListuserComponent],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
