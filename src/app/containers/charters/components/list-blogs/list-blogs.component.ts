import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-blogs',
  templateUrl: 'list-blogs.component.html',
  styleUrls: ['./list-blogs.component.scss']
})
export class ListBlogsComponent implements OnInit {
  @Input() shirts:Array<object>;

  @Input() isGold:boolean;
  @Input() isBrown:boolean;
  @Input() isRed:boolean;
  @Input() isYellow:boolean;
  @Input() isPink:boolean;
  @Input() isGreen:boolean;
  @Input() isBlack:boolean;
  @Input() isWhite:boolean;
  @Input() isGrey:boolean;
  @Input() isBlue:boolean;

  @Input() isXS:boolean;
  @Input() isS:boolean;
  @Input() isM:boolean;
  @Input() isL:boolean;
  @Input() isXL:boolean;
  @Input() isXXL:boolean;

  anyColorSelected(){
    if(this.isBrown) return true;
    if(this.isGold) return true;
    if(this.isBlue) return true;
    if(this.isPink) return true;
    if(this.isRed)  return true;
    if(this.isGreen)  return true;
    if(this.isYellow) return true;
    if(this.isBlack)  return true;
    if(this.isGrey) return true;
    if(this.isWhite)  return true;
    return false;
  }

  anySizeSelected(){
    if(this.isXS) return true;
    if(this.isS) return true;
    if(this.isM) return true;
    if(this.isL) return true;
    if(this.isXL)  return true;
    if(this.isXXL)  return true;
    return false;
  }

  shouldShow(shirt){
    //color selected
    return (!this.anySizeSelected() && ((this.isBrown && shirt.colour === 'brown') 
    || (this.isGold && shirt.colour === 'gold')
    || (this.isBlue && shirt.colour === 'blue')
    || (this.isPink && shirt.colour === 'pink')
    || (this.isRed && shirt.colour === 'red')
    || (this.isGreen && shirt.colour === 'green')
    || (this.isYellow && shirt.colour === 'yellow')
    || (this.isBlack && shirt.colour === 'black')
    || (this.isGrey && shirt.colour === 'grey')
    || (this.isWhite && shirt.colour === 'white')))

    //size selected
    || (!this.anyColorSelected() && ((this.isXS && (shirt.size === 'xs' || shirt.size === 'XS' || shirt.size === 'x-small'))
    || (this.isS && (shirt.size === 's' || shirt.size === 'S' || shirt.size === 'small'))
    || (this.isM && (shirt.size === 'm' || shirt.size === 'M' || shirt.size === 'medium'))
    || (this.isL && (shirt.size === 'l' || shirt.size === 'L' || shirt.size === 'large' ))
    || (this.isXL && (shirt.size === 'xl' || shirt.size === 'XL' || shirt.size === 'x-large'))
    || (this.isXXL && (shirt.size === 'xxl' || shirt.size === 'XXL' || shirt.size === 'xx-large'))))
    
    //color selected && size selected

    || ((this.anyColorSelected() && this.anySizeSelected()) && 
        ((this.isBrown && shirt.colour === 'brown') 
        || (this.isGold && shirt.colour === 'gold')
        || (this.isBlue && shirt.colour === 'blue')
        || (this.isPink && shirt.colour === 'pink')
        || (this.isRed && shirt.colour === 'red')
        || (this.isGreen && shirt.colour === 'green')
        || (this.isYellow && shirt.colour === 'yellow')
        || (this.isBlack && shirt.colour === 'black')
        || (this.isGrey && shirt.colour === 'grey')
        || (this.isWhite && shirt.colour === 'white')) 
        
        && ((this.isXS && (shirt.size === 'xs' || shirt.size === 'XS' || shirt.size === 'x-small'))
        || (this.isS && (shirt.size === 's' || shirt.size === 'S' || shirt.size === 'small'))
        || (this.isM && (shirt.size === 'm' || shirt.size === 'M' || shirt.size === 'medium'))
        || (this.isL && (shirt.size === 'l' || shirt.size === 'L' || shirt.size === 'large' ))
        || (this.isXL && (shirt.size === 'xl' || shirt.size === 'XL' || shirt.size === 'x-large'))
        || (this.isXXL && (shirt.size === 'xxl' || shirt.size === 'XXL' || shirt.size === 'xx-large'))))

    //none selected
    || (!this.isBrown && !this.isGold && !this.isBlue && !this.isPink && !this.isRed && !this.isGreen && !this.isYellow && !this.isBlack && !this.isGrey && !this.isWhite
    && !this.isXS && !this.isS && !this.isM && !this.isL && !this.isXL && !this.isXXL)
  }


  constructor() { }
 
  ngOnInit() {}

}
