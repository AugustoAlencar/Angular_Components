import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ScrollTestingModule } from './scroll-controller/scroll-controller.module';
import { RouterControllerModule } from './router-controller/router-controller.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollTestingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
