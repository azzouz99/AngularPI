import { Component, OnInit } from '@angular/core';
import {ShareholderService} from "../services/shareholder.service";
import {Shareholder} from "../Models/Shareholder";
@Component({
  selector: 'app-addshareholder',
  templateUrl: './addshareholder.component.html',
  styleUrls: ['./addshareholder.component.css']
})
export class AddshareholderComponent implements OnInit {
  listShareholder:any;
  Shareholder!: any;
  eventId:any;
  ShareholderId:any;
  constructor(private ShareholderService:ShareholderService) { }

  ngOnInit(): void {
    this.getAllShareholder();

    this.Shareholder={
      idShareholder:null,
      lastNameShareholder:null,
      firstNameShareholder:null,
      investment :null,
      email :null,
      numTel:null,
      partner:null
  }
  }
  getAllShareholder() {
    this.ShareholderService.getAllShareholder().subscribe(res=>this.listShareholder=res);
  }

  addShareholder() {

      this.ShareholderService.assignShareholderToEvent(this.Shareholder,this.eventId).subscribe(res=>{
        console.log("done")
      })
       this.getAllShareholder()
  }
}
