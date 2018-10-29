import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  
  @Output() gold$:EventEmitter<boolean>;
  @Output() brown$:EventEmitter<boolean>;
  @Output() red$:EventEmitter<boolean>;
  @Output() yellow$:EventEmitter<boolean>;
  @Output() pink$:EventEmitter<boolean>;
  @Output() green$:EventEmitter<boolean>;
  @Output() black$:EventEmitter<boolean>;
  @Output() white$:EventEmitter<boolean>;
  @Output() grey$:EventEmitter<boolean>;
  @Output() blue$:EventEmitter<boolean>;

  @Output() XS$:EventEmitter<boolean>;
  @Output() S$:EventEmitter<boolean>;
  @Output() M$:EventEmitter<boolean>;
  @Output() L$:EventEmitter<boolean>;
  @Output() XL$:EventEmitter<boolean>;
  @Output() XXL$:EventEmitter<boolean>;


  isGold = false;
  isBrown = false;
  isRed = false;
  isYellow = false;
  isPink = false;
  isGreen = false;
  isBlack = false;
  isWhite = false;
  isGrey = false;
  isBlue = false;

  isXS = false;
  isS = false;
  isM = false;
  isL = false;
  isXL = false;
  isXXL = false;

  

  constructor() { 

    this.gold$ = new EventEmitter<boolean>();
    this.brown$ = new EventEmitter<boolean>();
    this.red$ = new EventEmitter<boolean>();
    this.yellow$ = new EventEmitter<boolean>();
    this.pink$ = new EventEmitter<boolean>();
    this.green$ = new EventEmitter<boolean>();
    this.black$ = new EventEmitter<boolean>();
    this.white$ = new EventEmitter<boolean>();
    this.grey$ = new EventEmitter<boolean>();
    this.blue$ = new EventEmitter<boolean>();
  
    this.XS$ = new EventEmitter<boolean>();
    this.S$ = new EventEmitter<boolean>();
    this.M$ = new EventEmitter<boolean>();
    this.L$ = new EventEmitter<boolean>();
    this.XL$ = new EventEmitter<boolean>();
    this.XXL$ = new EventEmitter<boolean>();

  }

  // clickedBrown(){
  //   this.isBrown=!this.isBrown;
  //   this.brown$.emit(this.isBrown);
  //   console.log("marron");
  // }

  clear(){
    this.isGold = false;
    this.isBrown = false;
    this.isRed = false;
    this.isYellow = false;
    this.isPink = false;
    this.isGreen = false;
    this.isBlack = false;
    this.isWhite = false;
    this.isGrey = false;
    this.isBlue = false;

    this.isXS = false;
    this.isS = false;
    this.isM = false;
    this.isL = false;
    this.isXL = false;
    this.isXXL = false;

    this.gold$.emit(false);
    this.brown$.emit(false);
    this.red$.emit(false);
    this.yellow$.emit(false);
    this.pink$.emit(false); 
    this.green$.emit(false);
    this.black$.emit(false);
    this.white$.emit(false);
    this.grey$.emit(false);
    this.blue$.emit(false);

    this.XS$.emit(false);
    this.S$.emit(false);
    this.M$.emit(false);
    this.L$.emit(false);
    this.XL$.emit(false);
    this.XXL$.emit(false);
  }

  shouldAppear(){
    if(this.isGold)return true;    
    if(this.isBrown)return true;
    if(this.isRed)return true;
    if(this.isYellow)return true;
    if(this.isPink)return true;
    if(this.isGreen)return true;
    if(this.isBlack)return true;
    if(this.isWhite)return true;
    if(this.isGrey)return true;
    if(this.isBlue)return true;

    if(this.isXS)return true;
    if(this.isS)return true;
    if(this.isM)return true;
    if(this.isL)return true;
    if(this.isXL)return true;
    if(this.isXXL)return true;
    return false;
  }

  ngOnInit() {
  }

}
