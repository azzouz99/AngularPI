import { Component, OnInit } from '@angular/core';
import{OffersCredit} from "../Entities/offers-credit";
import {OffersCreditService} from "../OfferService/offers-credit.service";

@Component({
  selector: 'app-offers-credit',
  templateUrl: './offers-credit.component.html',
  styleUrls: ['./offers-credit.component.css']
})
export class OffersCreditComponent implements OnInit {
  listOffers:any;
  form : boolean = false;
  offers_credit!: OffersCredit;

  constructor(private offerService: OffersCreditService) { }

  ngOnInit(): void {
    this.getOffer();;
    this.offers_credit ={
      id_offer:null,
      credit:null,
      max_amount:null,
      min_amount:null,
      interest_rate:null,
      date_creation:null,
      repayment_period:null,





    };

  }
  getOffer(){
    this.offerService.getOffer().subscribe(res=>this.listOffers=res)
  }
  editOffer(offer:OffersCredit){
    this.offerService.editOffer(offer).subscribe();
  }
  deleteOffer(id:any){
    this.offerService.deleteOffer(id).subscribe(()=>this.getOffer())
  }



}
