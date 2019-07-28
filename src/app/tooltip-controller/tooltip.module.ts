import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TooltipComponent } from './tooltip.component';

import { TooltipService } from './services/tooltip.service';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [TooltipComponent],
    exports: [TooltipComponent],
    providers: [TooltipService]
})
export class TooltipModule { }