import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScrollControllerComponent } from './scroll-controller/scroll-controller.component';

export const routes: Routes = [

  // For empty routes
   {
    path: '',
    redirectTo: 'scroll',
    pathMatch: 'full'
  },

  // Routes for components
  {
    path: 'scroll',
    component: ScrollControllerComponent
    /* loadChildren : './back-office/login/login.module#LoginBackOfficeModule' */
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
