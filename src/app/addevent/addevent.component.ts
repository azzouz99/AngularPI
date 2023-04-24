import { Component, OnInit } from '@angular/core';
import {EventService} from "../services/event.service";
@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {
Event:any;
listEvents:any;

  constructor(private EventService:EventService) { }

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
}
