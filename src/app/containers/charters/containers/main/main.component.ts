import { Component, OnInit } from '@angular/core';
import { ClothesService } from '../../../../shared/clothes.service';


@Component({
  selector: 'main',
  templateUrl: 'main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  shirts:Array<object>

  isGold:boolean = false;
  isBrown:boolean = false;
  isRed:boolean = false;
  isYellow:boolean = false;
  isPink:boolean = false;
  isGreen:boolean = false;
  isBlack:boolean = false;
  isWhite:boolean = false;
  isGrey:boolean = false;
  isBlue:boolean = false;

  isXS:boolean = false;
  isS:boolean = false;
  isM:boolean = false;
  isL:boolean = false;
  isXL:boolean = false;
  isXXL:boolean = false;

  constructor(private clothesService: ClothesService) { 
    this.shirts=[];
  }

  ngOnInit() {
    this.findClothes();
    this.begin();
  } 

  begin(){ 
    // window.scrollTo(0,0);
  }

  //we call the server to get the shirts.
  findClothes(){ 
    this.clothesService.getClothes()
    .map(res => res.json())
    .subscribe(
      data => this.shirts = data,
      err => this.handleError(err),
      () => console.log('get clothes completed')
   ); 
  } 

  private handleError(error: any): void {
    // Repeat the action until it does correctly
    this.findClothes();
  }
}
