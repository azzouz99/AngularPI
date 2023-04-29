import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  ReactiveFormsModule } from '@angular/forms';
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
import { EventComponent } from './component/event/event.component';
import { AddeventComponent } from './addevent/addevent.component';
import { ShareholderComponent } from './component/shareholder/shareholder.component';
import { AddshareholderComponent } from './addshareholder/addshareholder.component';
import { ConfirmationComponent } from './component/confirmation/confirmation.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HistoryComponent } from './history/history.component';
import {MatTableModule} from '@angular/material/table';
import { UpdateComponent } from './component/update/update.component';
import { UpdateSharholderComponent } from './component/update-sharholder/update-sharholder.component';
import { ReportPopUpComponent } from './component/report-pop-up/report-pop-up.component';
import { InfoEventComponent } from './component/info-event/info-event.component';
import { InfoshareHolerComponent } from './component/infoshare-holer/infoshare-holer.component';

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
    EventComponent,
    AddeventComponent,
    ShareholderComponent,
    AddshareholderComponent,
    ConfirmationComponent,
    HistoryComponent,
    UpdateComponent,
    UpdateSharholderComponent,
    ReportPopUpComponent,
    InfoEventComponent,
    InfoshareHolerComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule ,
    BrowserAnimationsModule,
    MatTableModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
