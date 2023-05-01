import { Component, OnInit } from '@angular/core';
import { Investment } from 'src/app/Entities/investment';
import { InvestmentService } from 'src/app/investmentService/investment.service';
@Component({
  selector: 'app-investment-refused',
  templateUrl: './investment-refused.component.html',
  styleUrls: ['./investment-refused.component.css']
})
export class InvestmentRefusedComponent implements OnInit {
  investment!:Investment;
  constructor(private investmentservice: InvestmentService) { }
investments:any;
p:any;
  ngOnInit(): void {
    this.getRefInv();
    this.investment={
      id_invest:null,
      owner_id:null,
      project_name:null,
    amount_inv:null,
      description:null,
     date_debut:null,
    date_fin:null,
    invest_value:null,
     request:null,
     status:null,
    income_by_day:null,
    transactions:null,
  }
  }

  getRefInv(){
    this.investmentservice.FindbyRequest("REFUSED").subscribe(res => this.investments =res);
  }
  DeleteInv(id_invest : number){
    this.investmentservice.removeInvestissement(id_invest).subscribe(()=>this.getRefInv(),res=>{this.investments=res});
  }



}
