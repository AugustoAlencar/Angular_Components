import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmiterService } from './services/emiter.service';

import { ThreeDotMenuComponent } from './three-dot-menu.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [ThreeDotMenuComponent],
    exports: [ThreeDotMenuComponent],
    providers: [EmiterService]
})
export class ThreeDotMenuModule { }