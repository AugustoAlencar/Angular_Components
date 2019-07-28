import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { OptionModel } from './models/option.model';
import { EmiterService } from './services/emiter.service';


@Component({
  selector: 'app-three-dot-menu',
  templateUrl: './three-dot-menu.component.html',
  styleUrls: ['./three-dot-menu.component.scss']
})
export class ThreeDotMenuComponent implements OnInit {

  // falta a imagem dos 3 pontinhos

  @Input() options = new Array<OptionModel>();
  @Output() responseSelected = new EventEmitter();

  public opened: boolean = false;
  private subscription: any;

  constructor(
    private _emiterService: EmiterService
  ) { }

  ngOnInit() {
    this.subscription = this._emiterService.emiterClose.subscribe(data => this.opened = data);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public optionClicked(item: OptionModel): void {
    this.opened = false;
    this.responseSelected.emit(item);
  }

  public openMenu(): void {
    if (this.opened) {
      this.opened = false;
    } else {
      this._emiterService.openedMenu(false);
      this.opened = true;
    }
  }
}
