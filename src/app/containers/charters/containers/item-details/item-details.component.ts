import { Component, OnInit } from '@angular/core';
import { ClothesService } from '../../../../shared/clothes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GlobalService } from '../../../../shared/global.service';
declare let $:any;
 
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  m_shirt:any;
  
    constructor(private route: ActivatedRoute, private router: Router, private clothesService: ClothesService, private globalService: GlobalService) { 
      this.m_shirt={};
      
      globalService.itemValue.subscribe((nextValue) => {
        //we update the values after a change
        setTimeout(() => {
          this.isInShop();
        }, 200);
      }) 
    }

    ngOnInit() {
      this.begin();
      this.route.params.forEach((params: Params) => {
        if(params['uid']){
            let uid = params['uid'];
            // console.log(uid);
            this.findClothes(uid);
            this.uid = uid;
            this.isInShop();
        }
    });
    
    }
    scrollTop(){}
    //scroll up when the pages appears.
    begin(){ 
      // window.scrollTo(0,0);
    }

    //makes string to uppercase
    toUpper(s){
      if(s)return s.toUpperCase();
      else return '';
    } 
    
    //decide the string depending on the numb of items
    decideSingularPlural(num){
      if(num===1) return ' UNIT';
      else return ' UNITS';
    }

    //we search for the shirt we are looking for.
    findClothes(uid){  
      this.clothesService.getClothes()
      .map(res => res.json())
      .subscribe(
        data => {
          let intUID = parseInt(uid);

          for(let i of data){
            if(i.id === intUID) this.m_shirt = i;
          }
        },
        err => this.handleError(err,uid),
        () => console.log('get clothes completed')
     ); 
    } 
  
    private handleError(error: any,uid): void {
      // Repeat the action until it does correctly
      this.findClothes(uid);
    }
      
    uid='';
     
    //We add the item to the shopping cart.
    addToCart(){
      if(localStorage.getItem('itemsUnwire')!=null && localStorage.getItem('itemsUnwire')!=''){
        this.items = localStorage.getItem('itemsUnwire').split(',');
      }
      else this.items = [];
 
      let count = 0; 
      let ind = '';
      for(let it of this.items){
        // console.log(this.shirt.id, parseInt(it)); 
        if(this.m_shirt.id === parseInt(it)) {
          count++;
          ind = it;
        }
      }
      if(count>0){
        var index = this.items.indexOf(ind);
        
        if (index > -1) {
          this.items.splice(index, 1);
        }
      }
      else if(count===0) this.items.push(this.m_shirt.id.toString()) 

      this.globalService.theItem = this.items.toString();
      this.isInCart = !this.isInCart ;

      
    } 
 

    isInCart = false;
    items = [];

    //We check wheter the item is on the shop or not.
    isInShop(){
      if(localStorage.getItem('itemsUnwire')!=null && localStorage.getItem('itemsUnwire')!=''){
        this.items = localStorage.getItem('itemsUnwire').split(',');

        let count=0;
        for(let it of this.items){

          if(this.uid === it) count++;
        }
        if(count===0) this.isInCart = false;
        else this.isInCart = true;
      }
      else {
        this.items = [];
        this.isInCart = false;
      } 
    }


}
