import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {  Inject,  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventService } from 'src/app/services/event.service';
import { Shareholder } from 'src/app/Models/Shareholder';
import { ShareholderService } from 'src/app/services/shareholder.service';
@Component({
  selector: 'app-update-sharholder',
  templateUrl: './update-sharholder.component.html',
  styleUrls: ['./update-sharholder.component.css']
})
export class UpdateSharholderComponent implements OnInit {
  Shareholder:Shareholder
  idShareholder:any;
  lastNameShareholder:any;
  firstNameShareholder:any;
  investment :any;
  email :any;
  numTel:any;
  partner:any;
  constructor(
    public dialogRef: MatDialogRef<UpdateSharholderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public form: FormBuilder,
    private EventService:EventService,
    private ShareholderService :ShareholderService
  ) { 
    this.Shareholder = new Shareholder()
  }

  formupdate = new FormGroup({
    idShareholder: new FormControl(this.data.idShareholder  ),
    lastNameShareholder: new FormControl(this.data.lastNameShareholder),
    firstNameShareholder: new FormControl(this.data.firstNameShareholder),
    investment: new FormControl(this.data.investment),
    email: new FormControl(this.data.email),
    numTel: new FormControl(this.data.numTel),
    partner: new FormControl(this.data.partner),
  });
  ngOnInit(): void {
    console.log(this.data)
  }
  updateEvent(){
    this.Shareholder.idShareholder=this.data.idShareholder  
    this.Shareholder.lastNameShareholder=this.formupdate.get('lastNameShareholder')?.value
    this.Shareholder.firstNameShareholder=this.formupdate.get('firstNameShareholder')?.value
    this.Shareholder.investment=this.formupdate.get('investment')?.value
    this.Shareholder.email=this.formupdate.get('email')?.value
    this.Shareholder.numTel=this.formupdate.get('numTel')?.value
    this.Shareholder.partner=this.formupdate.get('partner')?.value
   this.ShareholderService.updateShareholder(this.Shareholder).subscribe(res=>{
    this.dialogRef.close(true)
   })

  }
  onNoClick(){
    this.dialogRef.close(false)
  }

}
