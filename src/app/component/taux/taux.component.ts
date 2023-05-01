import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {EventService} from "../../services/event.service";
import {ShareholderService} from "../../services/shareholder.service";

@Component({
  selector: 'app-taux',
  templateUrl: './taux.component.html',
  styleUrls: ['./taux.component.css']
})
export class TauxComponent implements OnInit {
taux:any
  rendement:any
  rendementShareHolder:any
  show:boolean=true
  constructor(
    public dialogRef: MatDialogRef<TauxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private eventservice:EventService,
    private share :ShareholderService
  ) {}

  ngOnInit(): void {
  }
calculer(){
  this.share.calculrendement(this.data.idShareholder,this.rendement).subscribe(res=>{
    this.rendementShareHolder=res
    this.show=true
  })
}
cancel(){
  this.dialogRef.close(true)
}
}
