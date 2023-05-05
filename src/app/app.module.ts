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
import { AddeventComponent } from './addevent/addevent.component';
import { AddshareholderComponent } from './addshareholder/addshareholder.component';
import { ConfirmationComponent } from './component/confirmation/confirmation.component';
import { InfoEventComponent } from './component/info-event/info-event.component';
import { InfoshareHolerComponent } from './component/infoshare-holer/infoshare-holer.component';
import { ReportPopUpComponent } from './component/report-pop-up/report-pop-up.component';
import { RoiComponent } from './component/roi/roi.component';
import { ShareholderComponent } from './component/shareholder/shareholder.component';
import { TauxComponent } from './component/taux/taux.component';
import { UpdateSharholderComponent } from './component/update-sharholder/update-sharholder.component';
import { HistoryComponent } from './history/history.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { FrontEventComponent } from './Front/front-event/front-event.component';
import { ListEventComponent } from './component/list-event/list-event.component';
import { EventComponent } from './Front/event/event.component';
import { VoirplusEventComponent } from './component/voirplus-event/voirplus-event.component';
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
    EventComponent,
    AddeventComponent,
    AddshareholderComponent,
    ConfirmationComponent,
    InfoEventComponent,
    InfoshareHolerComponent,
    ReportPopUpComponent,
    RoiComponent,
    ShareholderComponent,
    TauxComponent,
    UpdateSharholderComponent,
    HistoryComponent,
    FrontEventComponent,
    ListEventComponent,
    VoirplusEventComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSelectModule,




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
