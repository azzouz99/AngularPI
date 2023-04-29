import { Component, OnInit } from '@angular/core';
import {EventService} from "../../services/event.service";
import {Event} from "../../Models/Event";
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { UpdateComponent } from '../update/update.component';
import { ReportPopUpComponent } from '../report-pop-up/report-pop-up.component';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  displayedColumns: string[] = ['name', 'date', 'description', 'domain','typeEvent','like','dislike','Status','action'];
  idEvent:any;
  somme:any
  hide:boolean=true
  dataSource:any
  idEvent1:any;
  listEvents:any;
  form : boolean = false;
  Event!: Event;
  Eventupdate!:Event;
  total:any;
  listEvent:any;
  visible!:boolean;
  nbjours!:number;
  constructor(private EventService:EventService,public dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.visible=false;
    this.getArchive();
    this.getAllEvents();
    this.Event={
      idEvent: null,
      nameEvent: null,
      dateEvent: null,
      descriptionEvent: null,
      type: null,
      domain:null,
      likes: null,
      dislikes:null,
      eventStatus: null
       }

  }
  getvisible(){
    this.visible=true; 
  }
  getAllEvents() {
    this.EventService.getAllEvent().subscribe(res=>{this.listEvents=res
      this.dataSource =res
    });
  }
reportevent(){
  this.EventService.reportevent(this.idEvent1,this.nbjours).subscribe(() => this.getAllEvents(),res=>{this.listEvents=res});
}
  
  deleteEvent(element:any) {
    this.EventService.deleteEvent(element.idEvent).subscribe(() => this.getAllEvents(),res=>{
      this.listEvents=res
      this.getAllEvents()
    });
  }

  getEvent(id:number) {
    this.EventService.getEvent(id).subscribe(res => this.listEvents = res);
  }
  edit(Event: any){
    this.Eventupdate = Event;
  }
  updateEvent(element:any){
    this.EventService.updateEvent(element.idEvent).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
 EventInvestment(id:number){
this.EventService.getTotalInvestment(id).subscribe(
  res=>{this.total=res}
);
 }
 getArchive(){
  this.EventService.getArchive().subscribe(res=>this.listEvent=res);
 }
 cancelEvent(element:any): void {
  const dialogRef = this.dialog.open(ConfirmationComponent, {
  });
  dialogRef.afterClosed().subscribe(result => {
    if(result==true){
      this.EventService.cancelEvent(element.idEvent).subscribe(res=>{
        console.log(res);
      
      })
      console.log("canceled");
      this.getAllEvents()
    }else{
      console.log("not canceled");
    }
  });
}
reportEvent(element:any): void {
  const dialogRef = this.dialog.open(ReportPopUpComponent, {
    width:'600px',
    data:element.idEvent
  });
  dialogRef.afterClosed().subscribe(result => {
    if(result==true){
      this.EventService.cancelEvent(element.idEvent).subscribe(res=>{
        
        console.log(res);
      
      })
      console.log("canceled");
      this.getAllEvents()
    }else{
      console.log("not canceled");
    }
  });
}

updateEvents(element:any){
  const dialogRef = this.dialog.open(UpdateComponent, {
    width:'600px',
    data:element
  });
  dialogRef.afterClosed().subscribe(result => {
    if(result==true){
      console.log("updated");
      this.getAllEvents()
    }else{
      console.log("not updated");
    }
  });
}
calculerInvestissement(element :any){
  this.EventService.getTotalInvestment(element.idEvent).subscribe(res=>{
    this.hide=false
      this.somme=res
  })
}

  }
