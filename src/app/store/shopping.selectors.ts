import { ItemList } from "../../utils/Item.model";

export const selectItem= (state: {shop: {shopItemList: ItemList[], cartList: ItemList[]}})=> state.shop;