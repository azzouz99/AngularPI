import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {OffersCreditComponent} from "./offers-credit/offers-credit.component";
import {AddOfferComponent} from "./add-offer/add-offer.component";
import {RequestComponent} from "./request/request.component";
import {MatchingComponent} from "./matching/matching.component";
import { TransactionComponent } from './transaction/transaction.component';
import { WithdrawmodelComponent } from './withdrawmodel/withdrawmodel.component';
import { PretComponent } from './pret/pret.component';
import { InvestmentAcceptedComponent } from './Investment/investment-accepted/investment-accepted.component';
import { InvestmentPendingComponent } from './Investment/investment-pending/investment-pending/investment-pending.component';
import { InvestmentRefusedComponent } from './Investment/investment-refused/investment-refused/investment-refused.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"listoffer",component:OffersCreditComponent},
  {path:"addOffer",component:AddOfferComponent},
  {path:"listRequest",component:RequestComponent},
  {path:"Matching",component:MatchingComponent},
  {path:"Transactions",component:TransactionComponent},
  {path:"Withdraw",component:WithdrawmodelComponent},
  {path:"Pret",component:PretComponent},
  {path:'AcceptedInv',component:InvestmentAcceptedComponent},
  {path:'PendingInv',component:InvestmentPendingComponent},
  {path:'RefusedInv',component:InvestmentRefusedComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
