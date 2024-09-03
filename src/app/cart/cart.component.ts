import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { ItemList } from '../../utils/Item.model';
import { Store } from '@ngrx/store';
import { selectItem } from '../store/shopping.selectors';
import { remove , clear, increase, decrease} from '../store/shopping.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit{

  cartList:ItemList[];
  total: number=0;


  constructor(private store: Store<{shop:{shopItemList: ItemList[], cartList: ItemList[]}}>){
    // this.cartList=shoppingService.cartList;
  }
  ngOnInit(){
    // this.cartList=this.shoppingService.cartList;

    this.store.select(selectItem).subscribe((data)=>{
      this.cartList=data.cartList;
    })
    this.cartList.forEach(element => {
      this.total+=element.amount;
    });
  }

  onRemoveItem(index: number){
    // this.total-=this.cartList[index].amount;
    // this.cartList.splice(index,index+1);
    // this.shoppingService.cartLength.next(this.cartList.length);
    this.total-=this.cartList[index].amount;
    this.store.dispatch(remove({value: index}));
  }

  onClearCart(){
    // this.shoppingService.cartList=[];
    // this.cartList=this.shoppingService.cartList;
    // this.shoppingService.cartLength.next(0);
    this.total=0;
    this.store.dispatch(clear());
  }

  onIncreaseItem(index: number){
    // console.log(this.cartList[index].quantity);
    // this.cartList[index].quantity+=1;
    this.store.dispatch(increase({value: index}));
    this.total+=this.cartList[index].amount;
    console.log(this.cartList[index].quantity);
  }

  onDecreaseItem(index: number){
    if(this.cartList[index].quantity==1){
      this.total-=this.cartList[index].amount;
      this.store.dispatch(remove({value: index}));
    }
    else {
      this.total-=this.cartList[index].amount;
      this.store.dispatch(decrease({value: index}));
    }
  }

}
