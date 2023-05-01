import { Component, OnInit } from '@angular/core';
import { PretService } from '../PretService/pret.service';
import { Pret } from '../Entities/pret';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pret',
  templateUrl: './pret.component.html',
  styleUrls: ['./pret.component.css']
})
export class PretComponent implements OnInit {
 email!:string;
 id_pret:any;

pret!:Pret;
p: number = 1;
prets:any;

  constructor(private pretservice: PretService) { }

  ngOnInit(): void {
 /*   this.pretService.getPretWithUserEmail().subscribe(prets => {
      this.prets = prets; 
    }); */
 
    this.getPret();
    this.pret={
      id_pret:null,
      amount:null,
      investmentPeriodInMonths:null,
    date_inv:null,
     datefin:null,
      Interest:null,
      
      id_user:null,
     transaction:null,
    }
  }
getPret(){
  
  this.pretservice.getPret().subscribe(res => this.prets = res);
 
} 

  userEmail(id:any) {
    return this.pretservice.getUserEmail(id);
  }

 







}