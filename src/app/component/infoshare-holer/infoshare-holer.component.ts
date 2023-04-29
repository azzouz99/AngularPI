import { Component, OnInit } from '@angular/core';
import { ShareholderService } from 'src/app/services/shareholder.service';

@Component({
  selector: 'app-infoshare-holer',
  templateUrl: './infoshare-holer.component.html',
  styleUrls: ['./infoshare-holer.component.css']
})
export class InfoshareHolerComponent implements OnInit {

  statList:any =[]
  constructor(private ShareholderService :ShareholderService) { }

  ngOnInit(): void {
    this.ShareholderService.statShareholde().subscribe(res=>{
      this.statList=res
      console.log(  this.statList[0])
    })
  }
}
