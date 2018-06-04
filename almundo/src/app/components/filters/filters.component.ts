import { Component, OnInit } from '@angular/core';
import {HotelsService} from '../../service/hotels.service';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styles: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  stars:any = [[5,4,3,2,1],[4,3,2,1],[4,3,2,1],[3,2,1],[2,1],[1]];
  nameFilter:string="";
  selectedStars:number[]=[];

  constructor(private hotelservice:HotelsService ,private messageService:SharedService ) { }

  ngOnInit() {
  }

  filter(){
    let stars=this.selectedStars.join(",");

    let name="@";
    if(this.nameFilter!=""){
      name=this.nameFilter;
    }

    if(stars=="-1" ){
      stars="1,2,3,4,5";
    }else if(stars==""){
      stars="-99";
    }

    if(stars=="-99"){
      stars="1,2,3,4,5";
    }

    console.log(name);
    console.log(stars);

    this.hotelservice.getFilteredHotels(name,stars).subscribe(htl=>{
      this.hotelservice.filterInformation=htl;
      this.messageService.sendMessage(htl);
    });

  }

  setSelectedStar(e){

    if(e.target.checked){
      this.selectedStars.push(e.target.value)
    }else{
      const index: number = this.selectedStars.indexOf(e.target.value);
      if (index !== -1) {
        this.selectedStars.splice(index, 1);
      }
    }
    this.filter();
  }

}
