import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MarkpageComponent } from './markpage/markpage.component';
import { MotoshowComponent } from './motoshow/motoshow.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { PanelComponent } from './panel/panel.component';


const routes: Routes = [
  {
    path:'',
    component:HomepageComponent,
    children:[
      { path:'', component:PanelComponent },
      { path:'car', component:PanelComponent },
      { path:'moto', component:MotoshowComponent },
      
      
    ]
  },
  {
    path:'home',
    component:HomepageComponent,
    children:[
      { path:'', component:PanelComponent },
      { path:'car', component:PanelComponent },
      { path:'moto', component:MotoshowComponent },
      
    ]
  },
  {
    path:'about/:id',
    component:AboutpageComponent
  },
  {
    path:'mark',
    component:MarkpageComponent
  },

  {
    path:'**',
    component:NotfoundpageComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
