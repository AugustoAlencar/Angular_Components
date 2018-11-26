import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ScrollControllerComponent } from './scroll-controller.component';
import { HeaderComponent } from './components-layout/header/header.component';
import { FooterComponent } from './components-layout/footer/footer.component';
import { ListOfContentComponent } from './components-layout/list-of-content/list-of-content.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    ScrollControllerComponent,
    HeaderComponent,
    FooterComponent,
    ListOfContentComponent
  ],
  exports:[
    ScrollControllerComponent
  ]
})
export class ScrollTestingModule { }
