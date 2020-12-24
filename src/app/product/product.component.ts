import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, AfterViewInit {

  @Input() title;
  @Input() description;
  @Input() img;
  

  constructor() {
    console.log("constructor");
    
  }
  ngAfterViewInit(): void {
    console.log("after view init");
    
  }

  ngOnInit(): void {
    console.log("init ");
    
  }

}
