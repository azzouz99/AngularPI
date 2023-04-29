import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {OffersCreditComponent} from "./offers-credit/offers-credit.component";
import {AddOfferComponent} from "./add-offer/add-offer.component";
import {RequestComponent} from "./request/request.component";
import {MatchingComponent} from "./matching/matching.component";
import { EventComponent } from './component/event/event.component';
import { AddeventComponent } from './addevent/addevent.component';
import { ShareholderComponent } from './component/shareholder/shareholder.component';
import { AddshareholderComponent } from './addshareholder/addshareholder.component';
import { HistoryComponent } from './history/history.component';
import { InfoEventComponent } from './component/info-event/info-event.component';
import { InfoshareHolerComponent } from './component/infoshare-holer/infoshare-holer.component';


const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"listoffer",component:OffersCreditComponent},
  {path:"addOffer",component:AddOfferComponent},
  {path:"listRequest",component:RequestComponent},
  {path:"Matching",component:MatchingComponent},
  {path:"Event",component:EventComponent},
  {path:"AddEvent",component:AddeventComponent},
  {path:"Shareholder",component:ShareholderComponent},
  {path:"AddShareholder",component:AddshareholderComponent},
  {path:"history",component:HistoryComponent},
  {path:"infoEvent",component:InfoEventComponent},
  {path:"infoShareHolder",component:InfoshareHolerComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
