import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from '../../../../../shared/global.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() shirt:any;

  constructor(private globalService: GlobalService) {
    globalService.itemValue.subscribe((nextValue) => {
      //we update the values after a change
      setTimeout(() => {
        this.isInShop();
      }, 200);  
    })
   }

    ngOnInit() {
      this.isInShop(); 
    } 

    //we add the shirt to the cart.
    addToCart(){
      console.log(localStorage.getItem('itemsUnwire'));
      if(localStorage.getItem('itemsUnwire')!=null && localStorage.getItem('itemsUnwire')!=''){
        this.items = localStorage.getItem('itemsUnwire').split(',');
      }
      else this.items = [];

      let count = 0;
      let ind = '';
      for(let it of this.items){
        if(this.shirt.id === parseInt(it)) {
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
      else if(count===0) this.items.push(this.shirt.id.toString()) 

      this.globalService.theItem = this.items.toString();
      this.isInCart = !this.isInCart ; 

    }
 

    isInCart = false;
    items = [];

    //We check wheter the item is on the shop or not.
    isInShop(){
      if(localStorage.getItem('itemsUnwire')!=null && localStorage.getItem('itemsUnwire')!=''){
        this.items = localStorage.getItem('itemsUnwire').split(',');
        // console.log("los items son",this.items); 
        let count=0;
        for(let it of this.items){
          // console.log(this.shirt.id, parseInt(it)); 
          if(this.shirt.id === parseInt(it)) count++;
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
