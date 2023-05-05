import { Component, OnInit } from '@angular/core';
import {OfferStatics} from "../Entities/offer-statics";
import {OffersCreditService} from "../OfferService/offers-credit.service";



@Component({
  selector: 'app-statics-offers',
  templateUrl: './statics-offers.component.html',
  styleUrls: ['./statics-offers.component.css']
})
export class StaticsOffersComponent implements OnInit {

  input:any;
  liststat: any;
  statistics: any;
  id:any;

  constructor(private offerService: OffersCreditService) {
  }

  ngOnInit(): void {


 /*  this.statistics = {
      offerId: null,
      acceptedRequests: null,
      rejectedRequests: null,
      pendingRequests: null,
    }*/
  }

  Onsubmint() {
    if(this.id){
      this.offerService.offerStatics(this.id).subscribe(res=> this.statistics = res)
    }
  }

}





