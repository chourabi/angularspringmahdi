import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:String = 'my first app';
  arr:String[] = ['mars','avril','may'];
  isConnected = false;
  bgImage="../assets/1.jpg";

  red='red';

  myPara=' hello world <strong>chourabi taher</strong> ';

  txtButton='CLICK ME';
  count = 0;

  today = new Date();

  myTxt = "hello world";

  salary=2500;


  forminput = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',Validators.required),
    confirmpassword : new FormControl('',Validators.required),
    
    
  });

  // big form

  employeeSigninForm = new FormGroup({
    fullname: new FormControl(),
    phone:new FormControl(),
    address: new FormGroup({
      codepostal: new FormControl(),
      rue:new FormControl(),
      town: new FormControl()
    })
  })


  constructor(){
    console.log("constructor");
    
  }
  ngOnInit(): void {
    console.log("on init");
    
    setTimeout(() => {
      this.bgImage="../assets/2.jpg";
    }, 5000);
  }


  btnClick(){
    this.txtButton = 'CLICKED !';
    this.count++;
  }


  submit(){
    console.log(this.forminput);
    
    
  }

  checkForm(){
    const password = this.forminput.value.password;
    const cpassword = this.forminput.value.confirmpassword;
    
    if( this.forminput.valid  ){
      if ( password == cpassword ) {
        return false;
      }
    }

    return true;
  }


  check(){
    const value = this.employeeSigninForm.value;
    console.log(value);
    
  }






}
