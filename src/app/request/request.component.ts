import { Component, OnInit } from '@angular/core';
import {Request} from "../Entities/request";
import {RequestService} from "../reqService/request.service";
import {OffersCredit} from "../Entities/offers-credit";



@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  listRequests:any;
  form : boolean = false;
  request!: Request;







  constructor(private requestService:RequestService) { }

  ngOnInit(): void {
    this.getRequest();;
    this.request={
      id_request:null,
      request_date:null,
      amount_req:null,
      statut:null,
      description:null,
      gender:null,
      monthly_pay:null,
      term_loan:null,
      start_repayment:null,

    }
  }
  getRequest(){
    this.requestService.getRequest().subscribe(res=>this.listRequests=res)
  }
  deleteRequest(id:any){
    this.requestService.deleteRequest(id).subscribe(()=>this.getRequest())
  }

}
