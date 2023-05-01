import { Component, OnInit,Inject } from '@angular/core';
import { Investment } from 'src/app/Entities/investment';
import { InvestmentService } from 'src/app/investmentService/investment.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-investment-form',
  templateUrl: './investment-form.component.html',
  styleUrls: ['./investment-form.component.css']
})
export class InvestmentFormComponent implements OnInit {
  investment!:Investment;
  constructor(private investmentservice :InvestmentService,
    @Inject(MAT_DIALOG_DATA) public data: { id_invest: number },
    public dialogRef: MatDialogRef<InvestmentFormComponent>
  ) {}
  get investmentId(): number {
    return this.data.id_invest;
  }
  close(): void {
    this.dialogRef.close();
  }
  
  id:any;
  ngOnInit(): void {
    this.investmentservice
      .retrieveInvestissement(this.data.id_invest)
      .subscribe((res: Investment) => {
        this.investment = res;
      });

/*this.investment={
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

}; */
  }

  
}
