import { Component, OnInit, ElementRef } from '@angular/core';

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
    /* console.log(document.getElementById("botao"));
    console.log(document.getElementById("footer")); */

    console.log(parseInt(window.getComputedStyle(document.getElementById("botao"), null).getPropertyValue("height")))

    // this.scrollTeste();
  }

  /**
   *
   * Função responsavel por mexer no botao "Click aqui"
   * Ao iniciar o dom, ela estará fixa ao topo da tela.
   * quando chegar perto do ultimo elemento da lista, o botão passa a ficar abaixo da lista
   *
   * @private
   * @memberof ListOfContentComponent
   */
  /* private scrollTeste(): void {
    window.onscroll = function scrollTeste() {
      /* console.log('scroll', document.documentElement.scrollTop,
                  'tamanho da tela do cli', document.documentElement.clientHeight,
                  'altura do scroll', document.documentElement.scrollHeight ); *

      let tamanhoLista = parseInt(window.getComputedStyle(document.getElementsByClassName("animated")[0], null).getPropertyValue("height"))
      let tamanhoContainerPai = parseInt(window.getComputedStyle(document.getElementsByClassName("animated")[0], null).getPropertyValue("width"));
      /* console.log((document.documentElement.scrollTop + document.documentElement.clientHeight), tamanhoLista) *
      if ((document.documentElement.scrollTop + document.documentElement.clientHeight) >= tamanhoLista) {
        console.log('entrou');
        (document.getElementById("botao").style.position = "relative");
        (document.getElementById("botao").style.width = tamanhoContainerPai + 'px');
      } else {
        (document.getElementById("botao").style.position = "fixed");
        (document.getElementById("botao").style.width = tamanhoContainerPai + 'px');
      }

    }
  } */

  public fixedElements(): void {
    /* console.log(document.getElementById("botao").offsetTop) */
    document.getElementById("botao").style.position = 'fixed';
    document.getElementById("footer").style.position = 'fixed';
  }

}



/*

public fixedElements(event): void {
    /* console.log(event)
    console.log(document.documentElement.scrollTop) *

    document.getElementById("botao").style.position = 'fixed';
    document.getElementById("botao").style.bottom = '250px';
    document.getElementById("botao").style.width = parseInt(window.getComputedStyle(document.getElementsByClassName("animated")[0], null).getPropertyValue('width')) + 'px';
    document.getElementById("footer").style.width = parseInt(window.getComputedStyle(document.getElementsByClassName("animated")[0], null).getPropertyValue('width')) + 'px';
    document.getElementById("footer").style.position = 'fixed';

    console.log(document.getElementById(event).getBoundingClientRect().top)
    document.documentElement.scrollTop = document.getElementById(event).getBoundingClientRect().top;
  }

*/
