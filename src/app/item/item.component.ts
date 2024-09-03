import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CanComponentDeactivate } from './can-deactivate-gaurd.service';
import { ItemList } from '../../utils/Item.model';
import { Store } from '@ngrx/store';
import { selectItem } from '../store/shopping.selectors';
import {add} from "../store/shopping.actions";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit, OnDestroy{
  // user:{id: number, name: string};
  pickedItem: ItemList;
  index: number;

  // allowedEdit: false;
  // changesSaved: false;

  paramsSubcription: Subscription
  constructor(private route: ActivatedRoute, private store: Store<{shop: {shopItemList: ItemList[], cartList: ItemList[]}}>){

  }
  ngOnInit(){
    // this.user={
    //   id: this.route.snapshot.params['id'],
    //   name: this.route.snapshot.params['name']
    // }
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.store.select(selectItem).subscribe((data)=>{
      this.index=this.route.snapshot.queryParams.page;
      this.pickedItem=data.shopItemList[this.index];
    })
    console.log(this.pickedItem);
    // this.paramsSubcription=this.route.params.subscribe((params: Params)=>{
    //   this.user.id=params['id'];
    //   this.user.name=params['name']
    // })
  }
  ngOnDestroy(){
    // this.paramsSubcription.unsubscribe();
  }

  // canDeactivate(): boolean | Observable<boolean> | Promise<boolean>{
  //   if(!this.allowedEdit){
  //     return true;
  //   }
  //   return true;
  // }

  onAddToCart(){
    this.store.dispatch(add({value: this.index}));
  }
}
