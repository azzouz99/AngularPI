import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-front-event',
  templateUrl: './front-event.component.html',
  styleUrls: ['./front-event.component.css']
})
export class FrontEventComponent implements OnInit {
  events:any
  constructor(private eventService:EventService) { }
  msg :boolean=false;
  ngOnInit(): void {
    this.eventService.getAllEvent().subscribe(res=>{
      this.events=res
    })
  }

  likeEvent(eventId:any):void{
    this.eventService.eventLiked(eventId).subscribe(res=>{this.ngOnInit();});
  }

  dislikeEvent(eventId:any):void{
    this.eventService.eventDisliked(eventId).subscribe(res=>{this.ngOnInit()});
  }

  participer(eventId:number):void{
    this.eventService.participerEvent(eventId).subscribe(res=>{
      this.msg =true;
    });
  }

  removeMsg():void{
    this.msg = false;
  }


}
