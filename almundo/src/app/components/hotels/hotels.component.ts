import { Component, OnInit } from '@angular/core';
import { Observable, of,Subscription } from 'rxjs';

import { SharedService } from '../../service/shared.service';
import {HotelsService} from '../../service/hotels.service';
import {hotelClass} from '../../class/hotels.class';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

 subscription: Subscription;
 hotels:hotelClass[];
 stars:number[]=[5,4,3,2,1];

  constructor(private hotelService:HotelsService, private messageService:SharedService) {
    this.subscription = this.messageService.getMessage().subscribe(message => { this.hotels = message; console.log(message); });
 }



  ngOnInit() {
    this.getHotelsList();
  }

  getHotelsList(){
    this.hotelService.getHotels().subscribe(htl=>{
      this.hotels=htl;
    });
  }

  getArrayStars(cantidad){

  }

}
