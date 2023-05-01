import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {FrontHomeComponent} from "./front-home/front-home.component";
import {OfferComponent} from "./offer/offer.component";
import {TeamsComponent} from "./teams/teams.component";

const routes: Routes = [
  {path:"navbar",component:NavbarComponent},
  {path:"front-home",component:FrontHomeComponent},
  {path:"offer",component:OfferComponent},
  {path:"teams",component:TeamsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
