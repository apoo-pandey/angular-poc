import { NgModule } from '@angular/core';


import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGaurdService } from './AuthGuard.service';
import { CanDeactivateGaurd } from './item/can-deactivate-gaurd.service';
import { ErrorpageComponent } from './errorpage/errorpage.component';

const appRoutes: Routes=[
  {path:"", component: HomeComponent},
  {path:"about", component: AboutComponent},
  {path: "cart", component: CartComponent},
  {path:"contact-us", component: ContactUsComponent},
  {path: "shop",component: ShopComponent},
  {path:"shop/:id/:name", component:ItemComponent},
//   {path:"page-not-found", component: PageNotFoundComponent},
  {path: "error-page", component: ErrorpageComponent, data:{message: "Page not found!!!SDd"}},
  {path: "**", redirectTo: "error-page"} //wild-card-route- any path that is not known will be falling here
]


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true}) // older way to parse route from server.
    ],
    exports: [RouterModule]
})



export class AppRoutingModule{

}