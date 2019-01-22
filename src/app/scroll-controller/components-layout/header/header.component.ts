import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-scroll',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public list: Array<string> = ['Menu 1','Menu 2', 'Menu 3', 'Menu 4'];

  constructor() { }

  ngOnInit() {
  }

}
