import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ToastService } from './services/toast.service';

import { ToastComponent } from './toast.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [ToastComponent],
    exports: [ToastComponent],
    providers: [ToastService]
})
export class ToastModule { }