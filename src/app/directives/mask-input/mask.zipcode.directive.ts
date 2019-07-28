import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[zipcode]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: ZipCodeDirective,
    multi: true
  }]
})
export class ZipCodeDirective implements ControlValueAccessor, OnInit {

  onTouched: any;
  onChange: any;

  // metadado
  @HostListener('keyup', ['$event'])
  onkeyup($event: any) {
    let zipcode = $event.target.value;
    zipcode = String(zipcode).replace(/[\D]/g, '');
    /* 99999-999 */
    let inicio;
    let fim;
    if (zipcode.length > 5) {
      inicio = zipcode.substr(0, 5);
      fim = zipcode.substr(5, 3);
      zipcode = inicio + '-' + fim;
    }

    $event.target.value = zipcode;
    this.onChange(zipcode);
  }

  constructor(
    private _el: ElementRef
  ) { }

  ngOnInit() { }

  /* IMPLEMENTAÇÃO DA INTERFACE */

  /**
   * Registra função a ser chamada para atualizar
   * valor na model.
   * @param {any} _fn
   */
  registerOnChange(_fn: any) {
    this.onChange = _fn;
  }

  /**
   * Registra função a ser chamada para atualizar
   * valor na model para evento touched.
   * @param {any} _fn
   */
  registerOnTouched(_fn: any): void {
    this.onTouched = _fn;
  }

  /**
   * Obtém o valor contido na model.
   * @param {any} _value
   */
  writeValue(_value: any): void {
    this._el.nativeElement.value = _value;
  }
}
