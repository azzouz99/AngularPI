import { Component, OnInit } from '@angular/core';
import {EventService} from "../services/event.service";
import {Event} from "../Models/Event";
@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {
Event!: Event;
listEvents:any;

  constructor(private EventService:EventService) { }

  ngOnInit(): void {
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
  getAllEvents() {
    this.EventService.getAllEvent().subscribe(res=>this.listEvents=res);
  }
  addEvent() {
    this.EventService.addEvent(this.Event).subscribe(() => this.getAllEvents());
  }
}
