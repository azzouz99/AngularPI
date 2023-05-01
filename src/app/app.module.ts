import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
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
import { TransactionComponent } from './transaction/transaction.component';
import { PretComponent } from './pret/pret.component';
import { WithdrawmodelComponent } from './withdrawmodel/withdrawmodel.component';
import { InvestmentAcceptedComponent } from './Investment/investment-accepted/investment-accepted.component';
import { InvestmentFormComponent } from './Investment/investment-form/investment-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InvestmentPendingComponent } from './Investment/investment-pending/investment-pending/investment-pending.component';
import { InvestmentRefusedComponent } from './Investment/investment-refused/investment-refused/investment-refused.component';
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
    TransactionComponent,
   
    PretComponent,
    WithdrawmodelComponent,
    InvestmentAcceptedComponent,
    InvestmentFormComponent,
    InvestmentPendingComponent,
    InvestmentRefusedComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
