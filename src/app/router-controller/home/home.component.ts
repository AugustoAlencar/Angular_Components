import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public qtd = 3
  public form = {
    'campo1': 'Teste',
    'campo2': '',
    'campo3': '',
  }
  public valores = ['valor1', 'valor2', ''];

  constructor() { }

  ngOnInit() {

  }

}
