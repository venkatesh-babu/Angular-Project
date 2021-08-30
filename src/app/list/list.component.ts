import { Component, OnInit } from '@angular/core';
import countries from '../files/data.json';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  countryList:{name:string, src:string, rating:string, total_rating:string, ram:string, display:string, camera:string, battery:string, processor:string,rupee:string,warenty:string,assured_img:string,off:string,exchange:string}[] = countries;
  constructor() { }

  ngOnInit(): void {
  }
  isDisplay:boolean = true;
  icon = "expand_more";
  dropdown() {
    // this.isDisplay = !this.isDisplay;
    if(this.isDisplay==true){
      this.isDisplay=false;
      this.icon = "expand_less";
    }
    else {
      this.isDisplay=true;
      this.icon = "expand_more";
    }
  }
}