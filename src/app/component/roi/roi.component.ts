import {Component, Inject, OnInit} from '@angular/core';
import {EventService} from "../../services/event.service";
import {ShareholderService} from "../../services/shareholder.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
interface event {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-roi',
  templateUrl: './roi.component.html',
  styleUrls: ['./roi.component.css']
})
export class RoiComponent implements OnInit {
  events:any
  eventSelected:any
  roi:any
  event:event[] =[]
  constructor(    public dialogRef: MatDialogRef<RoiComponent>,
                  @Inject(MAT_DIALOG_DATA) public data: any,
                  private EventService:EventService,
                  private  ShareholderService:ShareholderService) { }

  ngOnInit(): void {
    this.getAllEvents()
  }
  getAllEvents() {
    this.EventService.getAllEvent().subscribe(res=>{
      this.events =res
      console.log(this.events)
    });
  }
  cancel(){

  }
  calculer(){
    this.ShareholderService.calculateROI(this.data.idShareholder, this.eventSelected.idEvent).subscribe(res=>{
      this.roi=res
    })

  }
  getEvent(event:any){
    this.eventSelected=event
  }
}
