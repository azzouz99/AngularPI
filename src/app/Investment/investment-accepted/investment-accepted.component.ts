import { Component, OnInit } from '@angular/core';
import { Investment } from 'src/app/Entities/investment';
import { InvestmentService } from 'src/app/investmentService/investment.service';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { InvestmentFormComponent } from '../investment-form/investment-form.component';


@Component({
  selector: 'app-investment-accepted',
  templateUrl: './investment-accepted.component.html',
  styleUrls: ['./investment-accepted.component.css']
})
export class InvestmentAcceptedComponent implements OnInit {
  investment!:Investment;
  constructor(private investmentservice: InvestmentService, public dialog: MatDialog) {
    
   }
   currentPage: number = 1;
  investments:any;
  p:any;
  ngOnInit(): void {
    this.getAccInv();
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

};
  }

  getAccInv(){
    this.investmentservice.FindbyRequest("ACCEPTED").subscribe(res => this.investments =res);
  }
  getInv(id_pret:any){
    this.investmentservice.retrieveInvestissement(id_pret).subscribe(res=>this.investment=res);
  }
  openInvestmentDetail(id_invest: number) {
    const dialogRef: MatDialogRef<InvestmentFormComponent> = this.dialog.open(InvestmentFormComponent, {
      data: { id_invest: id_invest } ,
      hasBackdrop: true,
      backdropClass: 'custom-dialog-backdrop',
      panelClass: 'custom-dialog-panel',
      autoFocus: true,
  closeOnNavigation: true,
    });
    dialogRef.afterOpened().subscribe(() => {
      dialogRef.backdropClick().subscribe(() => {
        dialogRef.close();
      });
    });
  }
  

}