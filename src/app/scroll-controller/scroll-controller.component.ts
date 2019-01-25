import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-controller',
  templateUrl: './scroll-controller.component.html',
  styleUrls: ['./scroll-controller.component.scss']
})
export class ScrollControllerComponent implements OnInit {

  @HostListener('scroll', ['$event'])
  scroll($event: any) {
    console.log('teste scorll')
  }

  constructor() { }

  ngOnInit() {
    this.inicio()
    this.progressBarScroll();
  }

  private inicio(): void {
      // função para controlar o botao "click aqui"
      let tamanhoLista = parseInt(window.getComputedStyle(document.getElementsByClassName("animated")[0], null).getPropertyValue("height"))
      let tamanhoContainerPai = parseInt(window.getComputedStyle(document.getElementsByClassName("animated")[0], null).getPropertyValue("width"));
      console.log((document.documentElement.scrollTop + document.documentElement.clientHeight), tamanhoLista)
      if ((document.documentElement.scrollTop + document.documentElement.clientHeight) >= tamanhoLista) {
        console.log('entrou');
        (document.getElementById("botao").style.position = "fixed");
        (document.getElementById("botao").style.width = tamanhoContainerPai + 'px');
      }
  }


  /**
   * document.body.scrollTop, document.documentElement.scrollTop -> Corresponde
   *     A posição da janela com relação ao documento HTML.
   *          por exemplo um documento com 1500px
   *          estou com o scroll no final da tela. E minha janela tem 400px;
   *          sendo assim estas medidas me retornam 1100px.
   *
   * document.documentElement.clientHeight -> Corresponde ao tamanho da janela do cliente (Usuario)
   *
   * document.documentElement.scrollHeight -> Corresponde a altura do documento html
   *
   * @private
   * @memberof ScrollControllerComponent
   */
  private progressBarScroll(): void {
    window.onscroll = function () { myFunction() };
    function myFunction() {
      // codigo abaixo para fazer o progress bar de acordo com o scroll
      let winScroll = document.body.scrollTop || document.documentElement.scrollTop; // pega a posição da janela com relação ao scroll
      let height = document.documentElement.scrollHeight - document.documentElement.clientHeight; // pega a altura do doc e subtrai com o o tamanho da janela
      let scrolled = (winScroll / height) * 100; // cria a porcentagem
      document.getElementById("myBar").style.width = scrolled + "%"; // adiciona ao html um novo estilo css



      // função para controlar o botao "click aqui"
      let tamanhoLista = parseInt(window.getComputedStyle(document.getElementsByClassName("animated")[0], null).getPropertyValue("height"))
      let tamanhoContainerPai = parseInt(window.getComputedStyle(document.getElementsByClassName("animated")[0], null).getPropertyValue("width"));
      console.log((document.documentElement.scrollTop + document.documentElement.clientHeight), tamanhoLista)
      if ((document.documentElement.scrollTop + document.documentElement.clientHeight) >= (tamanhoLista + 300)) {
        console.log('entrou');
        (document.getElementById("botao").style.position = "relative");
        (document.getElementById("botao").style.width = tamanhoContainerPai + 'px');
      } else {
        (document.getElementById("botao").style.position = "fixed");
        (document.getElementById("botao").style.width = tamanhoContainerPai + 'px');
      }


    }
  }

}


/*

ngOnInit() {
    // this.inicio()
    this.progressBarScroll();
  }

  private inicio(): void {
    console.log('entrou')
      let winScroll = document.body.scrollTop || document.documentElement.scrollTop; // pega a posição da janela com relação ao scroll
      let height = document.documentElement.scrollHeight - document.documentElement.clientHeight; // pega a altura do doc e subtrai com o o tamanho da janela
      let scrolled = (winScroll / height) * 100; // cria a porcentagem
      document.getElementById("myBar").style.width = scrolled + "%"; // adiciona ao html um novo estilo css

      // função para controlar o botao "click aqui"
      let tamanhoLista = parseInt(window.getComputedStyle(document.getElementsByClassName("animated")[0], null).getPropertyValue("height"))
      let tamanhoContainerPai = parseInt(window.getComputedStyle(document.getElementsByClassName("animated")[0], null).getPropertyValue("width"));
      /* console.log((document.documentElement.scrollTop + document.documentElement.clientHeight), tamanhoLista) *
      if ((document.documentElement.scrollTop + document.documentElement.clientHeight) >= tamanhoLista) {
        console.log('entrou');
        (document.getElementById("botao").style.position = "fixed");
        (document.getElementById("botao").style.width = tamanhoContainerPai + 'px');
      }
  }


  /**
   * document.body.scrollTop, document.documentElement.scrollTop -> Corresponde
   *     A posição da janela com relação ao documento HTML.
   *          por exemplo um documento com 1500px
   *          estou com o scroll no final da tela. E minha janela tem 400px;
   *          sendo assim estas medidas me retornam 1100px.
   *
   * document.documentElement.clientHeight -> Corresponde ao tamanho da janela do cliente (Usuario)
   *
   * document.documentElement.scrollHeight -> Corresponde a altura do documento html
   *
   * @private
   * @memberof ScrollControllerComponent
   *
  private progressBarScroll(): void {
    window.onscroll = function () { myFunction() };
    function myFunction() {
      // codigo abaixo para fazer o progress bar de acordo com o scroll
      let winScroll = document.body.scrollTop || document.documentElement.scrollTop; // pega a posição da janela com relação ao scroll
      let height = document.documentElement.scrollHeight - document.documentElement.clientHeight; // pega a altura do doc e subtrai com o o tamanho da janela
      let scrolled = (winScroll / height) * 100; // cria a porcentagem
      document.getElementById("myBar").style.width = scrolled + "%"; // adiciona ao html um novo estilo css


      // função para controlar o botao "click aqui"
      let tamanhoLista = parseInt(window.getComputedStyle(document.getElementsByClassName("animated")[0], null).getPropertyValue("height"))
      let tamanhoContainerPai = parseInt(window.getComputedStyle(document.getElementsByClassName("animated")[0], null).getPropertyValue("width"));
      /* console.log((document.documentElement.scrollTop + document.documentElement.clientHeight), tamanhoLista) *
      if ((document.documentElement.scrollTop + document.documentElement.clientHeight) >= tamanhoLista) {
        console.log('entrou');
        (document.getElementById("footer").style.position = "absolute");
        (document.getElementById("botao").style.position = "relative");
        (document.getElementById("botao").style.width = tamanhoContainerPai + 'px');
        (document.getElementById("botao").style.bottom = 0 + 'px');
      } else {
        (document.getElementById("botao").style.position = "fixed");
        (document.getElementById("botao").style.width = tamanhoContainerPai + 'px');
        /* (document.getElementById("botao").style.bottom = 8 + 'px'); *
      }


    }
  }


*/
