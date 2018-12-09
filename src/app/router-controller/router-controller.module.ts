import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterControllerRoutingModule } from './router-controller.routing';

import { RouterControllerComponent } from './router-controller.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterControllerRoutingModule
  ],
  declarations: [
    RouterControllerComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports:[
    RouterControllerComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class RouterControllerModule { }
