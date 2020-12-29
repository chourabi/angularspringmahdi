import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.css']
})
export class AboutpageComponent implements OnInit {

  id;
  constructor(
    public route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    /*this.id = this.route.params.subscribe((d)=>{
      console.log(d);
      
    })*/

    this.id = this.route.snapshot.params.id
    console.log(this.id);
    
    
  }

}
