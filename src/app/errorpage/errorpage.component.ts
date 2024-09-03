import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrl: './errorpage.component.css'
})
export class ErrorpageComponent implements OnInit{

  errorMessage: string;

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(){
    // this.errorMessage=this.route.snapshot.data['message']; //through snapshot

    this.route.data.subscribe((data)=>{ //through observable
      this.errorMessage=data.message;
    })
  }
}
