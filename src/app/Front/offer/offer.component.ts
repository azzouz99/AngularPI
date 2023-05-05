import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Shareholder } from 'src/app/Models/Shareholder';
import { ShareholderService } from 'src/app/services/shareholder.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  shareHolder :Shareholder [] = [];
  constructor(private shareHolderService:ShareholderService, private activatedRoute: ActivatedRoute) { }
  Shareholder!: any;
  eventId!:number;

  ngOnInit(): void {
    this.eventId = this.activatedRoute.snapshot.params['id'];
    this.shareHolderService.listShareHolderFromService(2).subscribe(res=> this.shareHolder = res);

  }

  addShareholder() {
    this.shareHolderService.assignShareholderToEvent(this.Shareholder,this.eventId).subscribe(res=>{
      console.log("done")
    })
  //this.getAllShareholder()
}

}
