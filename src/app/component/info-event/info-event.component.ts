import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-info-event',
  templateUrl: './info-event.component.html',
  styleUrls: ['./info-event.component.css']
})
export class InfoEventComponent implements OnInit {
  statList:any =[]
  constructor(private EventService :EventService) { }

  ngOnInit(): void {
    this.EventService.statEvent().subscribe(res=>{
      this.statList=res
      console.log(  this.statList[0])
    })
  }

}
