import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {  Inject,  } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Events } from 'src/app/Models/Event';
import { EventService } from 'src/app/services/event.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  event : Events
  constructor(
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public form: FormBuilder,
    private EventService:EventService
  ) {
    this.event = new Events()
  }
  formupdate = new FormGroup({
    name: new FormControl(this.data.nameEvent),
    date: new FormControl(this.data.dateEvent),
    description: new FormControl(this.data.descriptionEvent),
    domain: new FormControl(this.data.domain),
    typeEvent: new FormControl(this.data.type),
    like: new FormControl(this.data.likes),
    dislike: new FormControl(this.data.dislikes),
    status: new FormControl(this.data.eventStatus),
  });


  ngOnInit(): void {


  }
  updateEvent(){
    this.event.idEvent=this.data.idEvent
    this.event.nameEvent=this.formupdate.get('name')?.value
    this.event.dateEvent=this.formupdate.get('date')?.value
    this.event.descriptionEvent=this.formupdate.get('description')?.value
    this.event.domain=this.formupdate.get('domain')?.value
    this.event.type=this.formupdate.get('typeEvent')?.value
    this.event.likes=this.formupdate.get('like')?.value
    this.event.dislikes=this.formupdate.get('dislike')?.value
    this.event.eventStatus=this.formupdate.get('status')?.value
    this.EventService.updateEvent(this.event).subscribe(res=>{
      this.dialogRef.close(true)
    })
  }
  onNoClick(){
    this.dialogRef.close(false)
  }

}
