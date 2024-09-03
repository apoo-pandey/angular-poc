import { Component, OnDestroy, OnInit, ViewChild , ElementRef} from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { Observable } from 'rxjs-compat';
import { count } from 'rxjs-compat/operator/count';
import { map } from 'rxjs-compat/operator/map';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit{

  // @ViewChild('f') submitForm: NgForm;
  // private firstSubscription: Subscription;
  // status: string= "INVALID";
  // defaultChoice: string= "Olaf";
  // answer: string="";
  // genders=["male", "female","transgender"];
  // submitted: boolean=false;
  // userInput:object={
  //   name:"",
  //   email:"",
  //   subject:"",
  //   message:"",
  // };

  // @ViewChild('snackbar') snackbarEl: ElementRef;

  genders=['male', 'female'];
  signUpForm:FormGroup


  constructor(private route: ActivatedRoute){

  }
  ngOnInit(){ 
    this.signUpForm=new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null ,[Validators.required, Validators.email]),
      'gender': new FormControl('Female'),
      'subject': new FormControl(null),
    })
  }
    // this.firstSubscription=interval(1000).subscribe((count)=>{
    //   console.log(count);
    // })

  //   const customInterval=Observable.create(observer =>{
  //     let count=0;
  //     setInterval(()=>{
  //       observer.next(count);
  //       if(count==2){
  //         observer.complete();
  //       }
  //       if(count>3){
  //         observer.error(new Error("count exceeded"));
  //       }
  //       count++;
  //     }, 1000)
  //   })

  //   //  customInterval.pipe(map(data :num=>{
  //   //   return 'Round:' +(data+1);
  //   //  }))
  //   this.firstSubscription=customInterval.subscribe((data)=>{
  //     console.log(data);
  //   },
  //   (error)=>{
  //     console.log(error.message);
  //     alert(error.message);
  //   },
  //   ()=>{
  //     alert("I am Grooot");
  //   }
  //   )
    
  // }
  // ngOnDestroy(): void {
  //   // this.firstSubscription.unsubscribe(); 
  // }

  // onSubmit(form:NgForm){
  //   console.log(form.controls.userData.value.name);
  //   const snackbar=this.snackbarEl.nativeElement;

  //   snackbar.classList.add('show-bar');
  //   setTimeout(()=>{
  //     snackbar.classList.remove('show-bar');
  //   }, 5000);

  //   this.submitted=true;

  //   this.userInput={
  //     name: this.submitForm.form.controls.userData.value.name,
  //     email: this.submitForm.form.controls.userData.value.email,
  //     subject: this.submitForm.form.controls.subject.value,
  //     message: this.submitForm.form.controls.message.value,
  //   }
  //   this.submitForm.reset();
  // }
  // suggestUserName(){
  //   const suggestedName="Olaf Guston";
    // this.submitForm.setValue({
    //   userData:{
    //     name: suggestedName,
    //     email: "abc@gmail.com",
    //   },
    //   subject: "whatever!!",
    //   message: "Hii there!!",
    // })

  //   this.submitForm.form.patchValue({
  //     userData:{
  //       name: "Olaf Guston",
  //     }
  //   })
  // }

  onSubmit(){
    console.log(this.signUpForm);
  }
}
