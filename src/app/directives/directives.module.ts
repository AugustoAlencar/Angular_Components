import { NgModule } from '@angular/core';

import { ZipCodeDirective } from './mask-input/mask.zipcode.directive';
import { PassaporteDirective } from './mask-input/mask.passaporte.directive';
import { CPFDirective } from './mask-input/mask.cpf.directive';
import { PhoneDirective } from './mask-input/mask.phone.directive';

@NgModule({
  imports: [],
  declarations: [
    ZipCodeDirective,
    PhoneDirective,
    PassaporteDirective,
    CPFDirective
  ],
  exports: [
    ZipCodeDirective,
    PhoneDirective,
    PassaporteDirective,
    CPFDirective
  ],
})
export class DirectivesModule { }
