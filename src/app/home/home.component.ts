import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router, private route: ActivatedRoute){
   
  }

  onNavigateToShop(){
    this.router.navigate(['/shop']);
  }
  onNavigateToCart(){
    this.router.navigate(['/cart']);
  }
  onSelfNavigate(){
    this.router.navigate([""], {relativeTo:this.route});
    console.log("we reloaded");
  }
  // onLogin(){
  //   this.authService.onLoggingIn();
  // }
  // onLogout(){
  //   this.authService.onLoggingOut();
  // }

}
