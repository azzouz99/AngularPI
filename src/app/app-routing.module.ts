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
import {AddRequestComponent} from "./Front/add-request/add-request.component";
import {SimulationComponent} from "./Front/simulation/simulation.component";
import {SohwreqComponent} from "./Front/sohwreq/sohwreq.component";
import {LoanComponent} from "./Front/loan/loan.component";


const routes: Routes = [
  {path:"home",component:HomeComponent,children:[
      {path:"listoffer",component:OffersCreditComponent},
      {path:"addOffer",component:AddOfferComponent},
      {path:"listRequest",component:RequestComponent},
      {path:"Matching",component:MatchingComponent},
      {path:"update",component:UpdateComponent},
      {path:"statics/:id",component:StaticsOffersComponent},

    ]},
  {path:"front-home",component:FrontHomeComponent},
  {path:"nav-front",component:NavfrontComponent},
  {path:"teams",component:TeamsComponent},
  {path:"offer",component:OfferComponent},
  {path:"add-demand/:id_offer",component:AddRequestComponent},
  {path:"simulation",component:SimulationComponent},
  {path:"show-list",component:SohwreqComponent},
  {path:"loan",component:LoanComponent},
  {path:"add-demand",component:AddRequestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
