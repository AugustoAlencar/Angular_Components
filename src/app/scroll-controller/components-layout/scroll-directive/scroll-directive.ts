import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[scroll]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: PassaporteDirective,
    multi: true
  }]
})
export class PassaporteDirective implements ControlValueAccessor, OnInit {

  onTouched: any;
  onChange: any;

  // metadado
  @HostListener('scroll', ['$event'])
  onkeyup($event: any) {

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
