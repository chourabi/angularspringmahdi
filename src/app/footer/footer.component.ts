import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit,AfterViewInit,OnDestroy {

  @ViewChild('myinput',{static:false}) myIn : ElementRef;
  constructor() {
    
    
  }
  ngOnDestroy(): void {
    console.log("destroyed");
    
  }
  ngAfterViewInit(): void {
    console.log(this.myIn);
  }

  ngOnInit(): void {
    
  }

}
