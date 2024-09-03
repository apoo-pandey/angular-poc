import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { shoppingListService } from "../Services/shoppingListService";
import { ItemList } from "../../utils/Item.model";
import { Store } from "@ngrx/store";
import { selectItem } from "../store/shopping.selectors";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit{
    
    cartLength: number;
    
    constructor(private store: Store<{shop: {shopItemList: ItemList[], cartList: ItemList[]}}>) {
        // this.cartLength=shoppinglistService.cartList.length;
    }
    ngOnInit(){
        // this.cartLength=this.shoppinglistService.cartList.length;
        // this.shoppinglistService.cartLength.subscribe((length:number)=>{
        //     this.cartLength=length;
        // })
        this.store.select(selectItem).subscribe((data)=>{
            this.cartLength=data.cartList.length;
        })
    }
}