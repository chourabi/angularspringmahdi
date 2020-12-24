import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  products = [
    {
      title:"tesla x2",
      description:"super vehicule electric",
      img:"https://tesla-cdn.thron.com/delivery/public/image/tesla/35d15221-0a5f-4dce-b484-a4db67b81dd2/bvlatuR/std/0x0/model-s@2x"
    },
    {
      title:"tesla x3",
      description:"super vehicule electric",
      img:"https://tesla-cdn.thron.com/delivery/public/image/tesla/35d15221-0a5f-4dce-b484-a4db67b81dd2/bvlatuR/std/0x0/model-s@2x"
    },
    {
      title:"tesla x5",
      description:"super vehicule electric",
      img:"https://tesla-cdn.thron.com/delivery/public/image/tesla/35d15221-0a5f-4dce-b484-a4db67b81dd2/bvlatuR/std/0x0/model-s@2x"
    },
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
