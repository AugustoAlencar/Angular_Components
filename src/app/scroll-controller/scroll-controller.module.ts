import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ScrollControllerComponent } from './scroll-controller.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    ScrollControllerComponent
  ],
  exports:[
    ScrollControllerComponent
  ]
})
export class ScrollTestingModule { }
