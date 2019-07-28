import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterControllerRoutingModule } from './router-controller.routing';

import { RouterControllerComponent } from './router-controller.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { SingleSelectModule } from '../single-select-controller/single-select.module';
import { ThreeDotMenuModule } from '../three-dot-menu-controller/three-dot-menu.module';
import { ToastModule } from '../toast-controller/toast.module';
import { TooltipModule } from '../tooltip-controller/tooltip.module';
import { TypeaheadModule } from '../typeahead-controller/typeahead.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterControllerRoutingModule,
    /* SingleSelectModule */
    /* ThreeDotMenuModule */
    /* ToastModule */
    /* TooltipModule */
    /* TypeaheadModule */
  ],
  declarations: [
    RouterControllerComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    RouterControllerComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class RouterControllerModule { }
