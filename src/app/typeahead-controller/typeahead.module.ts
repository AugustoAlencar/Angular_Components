import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmiterService } from './services/emiter.service';

import { TypeaHeadCloseDiretive } from './directives/typeahead-close-control';
import { TypeaHeadListDiretive } from './directives/typeahead-list-control-diretive';

import { TypeaheadComponent } from './typeahead.component';


@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [TypeaHeadCloseDiretive, TypeaHeadListDiretive, TypeaheadComponent],
    exports: [TypeaHeadCloseDiretive, TypeaHeadListDiretive, TypeaheadComponent],
    providers: [EmiterService]
})
export class TypeaheadModule { }