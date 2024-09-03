import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './Header/header.component';
import { ShopComponent } from './shop/shop.component';
// import { RouterModule, Routes } from '@angular/router';
import { shoppingListService } from './Services/shoppingListService';
import { ItemComponent } from './item/item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGaurdService } from './AuthGuard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGaurd } from './item/can-deactivate-gaurd.service';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { shoppingReducer } from './store/shopping.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// const appRoutes: Routes=[
//   {path:"", component: HomeComponent},
//   {path:"about", component: AboutComponent},
//   {path: "cart", component: CartComponent},
//   {path:"contact-us", component: ContactUsComponent},
//   {path: "shop", component: ShopComponent },
//   {path:"shop/:id/:name", component:ItemComponent },
//   {path:"page-not-found", component: PageNotFoundComponent},
//   {path: "**", redirectTo: "/page-not-found"} //wild-card-route- any path that is not known will be falling here
// ]
@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactUsComponent,
    CartComponent,
    ShopComponent,
    ItemComponent,
    PageNotFoundComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      shop: shoppingReducer
    }),
    EffectsModule.forRoot([])
  ],
  providers: [shoppingListService, AuthGaurdService, AuthService, CanDeactivateGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
