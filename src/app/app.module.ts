import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidbarComponent } from './sidbar/sidbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffersCreditComponent } from './offers-credit/offers-credit.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddOfferComponent } from './add-offer/add-offer.component';
import { RequestComponent } from './request/request.component';
import { MatchingComponent } from './matching/matching.component';
import { UpdateComponent } from './update/update.component';
import { StaticsOffersComponent } from './statics-offers/statics-offers.component';
import { FrontHomeComponent } from './Front/front-home/front-home.component';
import { NavfrontComponent } from './Front/navfront/navfront.component';
import { TeamsComponent } from './Front/teams/teams.component';
import { OfferComponent } from './Front/offer/offer.component';
import { AddRequestComponent } from './Front/add-request/add-request.component';
import {NgApexchartsModule} from "ng-apexcharts";
import { SimulationComponent } from './Front/simulation/simulation.component';
import { SohwreqComponent } from './Front/sohwreq/sohwreq.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoanComponent } from './Front/loan/loan.component';



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
    UpdateComponent,
    StaticsOffersComponent,
    FrontHomeComponent,
    NavfrontComponent,
    TeamsComponent,
    OfferComponent,
    AddRequestComponent,
    SimulationComponent,
    SohwreqComponent,
    LoanComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
