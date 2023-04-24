import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {OffersCreditComponent} from "./offers-credit/offers-credit.component";
import {AddOfferComponent} from "./add-offer/add-offer.component";
import {RequestComponent} from "./request/request.component";
import {MatchingComponent} from "./matching/matching.component";

const routes: Routes = [
  {path:"home",component:HomeComponent},
      {path:"listoffer",component:OffersCreditComponent},
  {path:"addOffer",component:AddOfferComponent},
  {path:"listRequest",component:RequestComponent},
  {path:"Matching",component:MatchingComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
