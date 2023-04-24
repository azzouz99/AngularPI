import { Component, OnInit } from '@angular/core';
import {EventService} from "../../services/event.service";
import {Event} from "../../Models/Event";
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  listEvents:any;
  form : boolean = false;
  Event!: Event;
  constructor(private EventService:EventService) {

  }

  ngOnInit(): void {
    this.getAllEvents();
    this.Event={
      id_event: null,
      name_event: null,
      date_event: null,
      description_event: null,
      type: null,
      domain:null,
      like: null,
      dislike:null,
      event_status: null
    }

  }
  getAllEvents() {
    this.EventService.getAllEvent().subscribe(res=>this.listEvents=res);
  }

  addEvent() {
    this.EventService.addEvent(this.Event).subscribe(() => this.getAllEvents());
  }
  deleteEvent(id:number) {
    this.EventService.deleteEvent(id).subscribe(() => this.getAllEvents(),res=>{this.listEvents=res});
  }

  getEvent(id:number) {
    this.EventService.getEvent(id).subscribe(res => this.listEvents = res);
  }
  }
