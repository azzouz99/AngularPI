import { Component, OnInit } from '@angular/core';
import {ShareholderService} from "../../services/shareholder.service";
import {Shareholder} from "../../Models/Shareholder";
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { UpdateSharholderComponent } from '../update-sharholder/update-sharholder.component';
import {TauxComponent} from "../taux/taux.component";
import {RoiComponent} from "../roi/roi.component";
@Component({
  selector: 'app-shareholder',
  templateUrl: './shareholder.component.html',
  styleUrls: ['./shareholder.component.css']
})
export class ShareholderComponent implements OnInit {
  listShareholder:any;
  form : boolean = false;
  Shareholder!: Shareholder;
  Shareholderupdate:any;
  displayedColumns: string[] = ['prenom', 'investissement', 'email', 'numtel','partner', 'actions'];
  dataSource:any;
  id:any;
  taux:any;
  rendement:any;
  constructor(private ShareholderService:ShareholderService,public dialog: MatDialog) { }

  ngOnInit(): void {
    id:null;
    taux:null;
    rendement:null;
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
    this.ShareholderService.getAllShareholder().subscribe(res=>{
      this.dataSource =res
    });
  }


  deleteShareholder(element:any) {
    this.ShareholderService.deleteShareholder(element.idShareholder).subscribe(() => this.getAllShareholder(),res=>{this.listShareholder=res});
  }

  getShareholder(id:number) {
    this.ShareholderService.getShareholder(id).subscribe(res => this.listShareholder = res);
  }
  edit(shareholder: any){
    this.Shareholderupdate = shareholder;
  }
  updateShareholder(element:any){
   /* this.ShareholderService.updateShareholder(this.Shareholderupdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );;
    */
    const dialogRef = this.dialog.open(UpdateSharholderComponent, {
      width:'600px',
      data:element
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result==true){
        console.log("updated");
        this.getAllShareholder()
      }else{
        console.log("not updated");
      }
    });
  }
  calculrendement() {
    this.ShareholderService.calculrendement(this.dialog,this.taux).subscribe((res)=>{this.rendement=res});
  }
  calculShareholder(element :any){
     const dialogRef = this.dialog.open(TauxComponent, {
      width:'600px',
      data:element
    });
  }
  calculRoi(element :any){
    const dialogRef = this.dialog.open(RoiComponent, {
      width:'400px',
      data:element
    });
  }
}
