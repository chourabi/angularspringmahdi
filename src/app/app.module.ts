import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroPipe } from './hero.pipe';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ProductComponent } from './product/product.component';
import { PanelComponent } from './panel/panel.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { MarkpageComponent } from './markpage/markpage.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { MotoshowComponent } from './motoshow/motoshow.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroPipe,
    NavbarComponent,
    SidemenuComponent,
    ProductComponent,
    PanelComponent,
    FooterComponent,
    HomepageComponent,
    AboutpageComponent,
    MarkpageComponent,
    NotfoundpageComponent,
    MotoshowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
