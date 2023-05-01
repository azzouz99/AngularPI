import { Component, OnInit } from '@angular/core';
import { InvestmentService } from 'src/app/investmentService/investment.service';
import { Investment } from 'src/app/Entities/investment';
import { MatDialogRef,MatDialog } from '@angular/material/dialog';
import { InvestmentFormComponent } from '../../investment-form/investment-form.component';
@Component({
  selector: 'app-investment-pending',
  templateUrl: './investment-pending.component.html',
  styleUrls: ['./investment-pending.component.css']
})
export class InvestmentPendingComponent implements OnInit {
  investment!:Investment;
  constructor(private investmentservice: InvestmentService, public dialog: MatDialog) { }
investments:any;
p:any;
  ngOnInit(): void {
    this.getPenInv();
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
  getPenInv(){
    this.investmentservice.FindbyRequest("PENDING").subscribe(res => this.investments =res);
  }
  AcceptInv(id_invest:number){

      this.investmentservice.acceptInv(id_invest).subscribe(() => {
        console.log('Investment accepted successfully');
       
      }, error => {
        console.log('Error accepting investment: ', error);
      
      });
  

  }
  RefuseInv(id_invest:number){
    this.investmentservice.refuseInv(id_invest).subscribe(() => {
      console.log('Investment accepted successfully');
     
    }, error => {
      console.log('Error accepting investment: ', error);
    
    });
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
