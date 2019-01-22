import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-footer-scroll',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public list: Array<Object>;

  constructor() { }

  ngOnInit() {
    this.pushList();
  }

  private pushList(): void {
    this.list = [
      {
        title: 'Element1',
        elements: [
          'linkTeste do teste 1', 'linkTeste teste 2', 'do teste 3',
        ]
      },
      {
        title: 'Element2',
        elements: [
          'linkTeste do teste 1', 'linkTeste teste 1', 'linkTeste', 'link 4'
        ]
      },
      {
        title: 'Element3',
        elements: [
          'linkTeste do teste 1', 'linkTeste teste 1',
        ]
      },
      {
        title: 'Element4',
        elements: [
          'linkTeste do teste 1', 'linkTeste teste 1',
        ]
      },

    ]
  }

}
