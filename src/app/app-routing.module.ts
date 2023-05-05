import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {OffersCreditComponent} from "./offers-credit/offers-credit.component";
import {AddOfferComponent} from "./add-offer/add-offer.component";
import {RequestComponent} from "./request/request.component";
import {MatchingComponent} from "./matching/matching.component";
import {UpdateComponent} from "./update/update.component";
import {StaticsOffersComponent} from "./statics-offers/statics-offers.component";
import {FrontHomeComponent} from "./Front/front-home/front-home.component";
import {NavfrontComponent} from "./Front/navfront/navfront.component";
import {TeamsComponent} from "./Front/teams/teams.component";
import {OfferComponent} from "./Front/offer/offer.component";
import { EventComponent } from './Front/event/event.component';
import {AddeventComponent} from "./addevent/addevent.component";
import {ShareholderComponent} from "./component/shareholder/shareholder.component";
import {AddshareholderComponent} from "./addshareholder/addshareholder.component";
import {HistoryComponent} from "./history/history.component";
import {InfoEventComponent} from "./component/info-event/info-event.component";
import {InfoshareHolerComponent} from "./component/infoshare-holer/infoshare-holer.component";
import { FrontEventComponent } from './Front/front-event/front-event.component';
import { ListEventComponent } from './component/list-event/list-event.component';
import { VoirplusEventComponent } from './component/voirplus-event/voirplus-event.component';

const routes: Routes = [
  {path:"home",component:HomeComponent,children:[
      {path:"listoffer",component:OffersCreditComponent},
      {path:"addOffer",component:AddOfferComponent},
      {path:"listRequest",component:RequestComponent},
      {path:"Matching",component:MatchingComponent},
      {path:"update",component:UpdateComponent},
      {path:"statics/:id",component:StaticsOffersComponent},
      {path:"AddEvent",component:AddeventComponent},
      {path:"Shareholder",component:ShareholderComponent},
      {path:"AddShareholder",component:AddshareholderComponent},
      {path:"history",component:HistoryComponent},
      {path:"infoEvent",component:InfoEventComponent},
      {path:"infoShareHolder",component:InfoshareHolerComponent},
      {path:"Event",component:EventComponent}
      

    ]},
    {path:'',component:FrontHomeComponent},
  {path:"front-home",component:FrontHomeComponent},
  {path:"nav-front",component:NavfrontComponent},
  {path:"teams",component:TeamsComponent},
  {path:"shareholder",component:OfferComponent},
  {path:"front",component:FrontEventComponent},
  {path:"voir-plus", component:VoirplusEventComponent}










];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
