import { Component, EventEmitter, Output } from '@angular/core';
import { ItemList } from '../../utils/Item.model';
import { shoppingListService } from '../Services/shoppingListService';
import {Store} from "@ngrx/store";
import { selectItem } from '../store/shopping.selectors';
import {add} from '../store/shopping.actions';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent {
  shopItemList: ItemList[]=[];

   constructor(private store: Store<{shop: {shopItemList: ItemList[], cartList: ItemList[]}}>){
      this.store.select(selectItem).subscribe((data)=>{
        this.shopItemList=data.shopItemList;
      })
   }
   onAddToCart(index: number){
     console.log(index);
    //  this.shoppingService.cartList.push(this.shopItemList[index]);
    //  this.shoppingService.cartLength.next(this.shoppingService.cartList.length);
    this.store.dispatch(add({value: index}));
   }
   onSelectItem(index: number){
      
   }
}

//Subscribe is kind of EventEmitter so we instead of emit in event emitter we do next() to execute that particular subject.
