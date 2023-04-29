import { Component, OnInit,Inject } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-report-pop-up',
  templateUrl: './report-pop-up.component.html',
  styleUrls: ['./report-pop-up.component.css']
})
export class ReportPopUpComponent implements OnInit {
  NbrJours:any
  constructor(
    public dialogRef: MatDialogRef<ReportPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private eventservice:EventService
  ) {}


  ngOnInit(): void {
  }

  report(){
    console.log(this.NbrJours)
    console.log(this.data)
    this.eventservice.reportevent(this.data,this.NbrJours).subscribe(res=>{
      this.dialogRef.close(true)
    })
  }
}
