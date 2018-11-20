import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScrollTestingModule } from './scroll-controller/scroll-controller.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollTestingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
