import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  categorys = [
    'Moto',
    'Vehicule',
    'Velo',
    'Loisir',
    'Menage',
    'etc',
    'sport',
    'Moto',
    'Moto',
    'Moto',
    'Moto',
    'Moto',
    'Moto',
    'Moto',
    'Moto',
    
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
