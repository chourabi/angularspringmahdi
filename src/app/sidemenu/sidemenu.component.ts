import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  categorys = [
    {
      label:'Moto',
      path:'/home/moto'
    },
    {
      label:'Vehicule',
      path:'/home/car'
    }
    
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
