import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-controller',
  templateUrl: './scroll-controller.component.html',
  styleUrls: ['./scroll-controller.component.scss']
})
export class ScrollControllerComponent implements OnInit {

  @HostListener('scroll', ['$event'])
  scroll($event: any) {

  }

  constructor() { }

  ngOnInit() {
    this.progressBarScroll();
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
      let winScroll = document.body.scrollTop || document.documentElement.scrollTop; // pega a posição da janela com relação ao scroll
      let height = document.documentElement.scrollHeight - document.documentElement.clientHeight; // pega a altura do doc e subtrai com o o tamanho da janela
      let scrolled = (winScroll / height) * 100; // cria a porcentagem
      document.getElementById("myBar").style.width = scrolled + "%"; // adiciona ao html um novo estilo css
    }
  }

}
