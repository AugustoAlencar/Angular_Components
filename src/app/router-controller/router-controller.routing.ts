import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// components
import { RouterControllerComponent } from './router-controller.component';
import { HomeComponent } from './home/home.component';

const RouterControllerRoutes: Routes = [

    {
      path: '',
      component: RouterControllerComponent,
       children: [
        {
            path: '',
            component: HomeComponent
        }
    ],
    },

];

@NgModule({
    imports: [RouterModule.forChild(RouterControllerRoutes)],
    exports: [RouterModule]
})
export class RouterControllerRoutingModule {}
