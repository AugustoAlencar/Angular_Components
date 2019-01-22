import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-content-scroll',
  templateUrl: './list-of-content.component.html',
  styleUrls: ['./list-of-content.component.scss']
})
export class ListOfContentComponent implements OnInit {

  public list: Array<string> = [
    'Conteudo clicavel numero 1',
    'Conteudo clicavel numero 2',
    'Conteudo clicavel numero 3',
    'Conteudo clicavel numero 4',
    'Conteudo clicavel numero 5',
    'Conteudo clicavel numero 6',
    'Conteudo clicavel numero 7',
  ]

  constructor() { }

  ngOnInit() {
  }

}
