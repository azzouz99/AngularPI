import { Component, OnInit } from '@angular/core';
import {AccOrRef} from "../Entities/acc-or-ref";
import {RequestService} from "../reqService/request.service";

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.css']
})
export class MatchingComponent implements OnInit {
  listMatchings:any;
  form : boolean = false;
  accOrRef!: AccOrRef;
  constructor(private requestService:RequestService) { }

  ngOnInit(): void {
    this.retrieveAllMatchings();;
    this.accOrRef={
      id_AccOrRef:null,
      check_loan:null

    }
  }
  retrieveAllMatchings(){
    this.requestService.retrieveAllMatchings().subscribe(res=>this.listMatchings=res)
  }

}
