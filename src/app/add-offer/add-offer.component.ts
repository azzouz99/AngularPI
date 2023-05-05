import { Component, OnInit } from '@angular/core';
import{OffersCredit} from "../Entities/offers-credit";
import {OffersCreditService} from "../OfferService/offers-credit.service";
@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {
  message:any;
  offers_credit!: OffersCredit;

  constructor(private offerService:OffersCreditService) { }


  ngOnInit(): void {
    this.offers_credit ={
      id_offer:null,
      credit:null,
      max_amount:null,
      min_amount:null,
      interest_rate:null,
      date_creation:null,
      repayment_period:null,


    }
  }
  addOffer(offer_credit:any){
    this.offerService.addOffer(offer_credit).subscribe(()=>{this.offerService.getOffer()})
  }

}
