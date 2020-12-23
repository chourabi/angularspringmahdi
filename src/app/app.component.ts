import { Component, OnInit } from '@angular/core';

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








}
