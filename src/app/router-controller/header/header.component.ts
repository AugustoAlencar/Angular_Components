import { Component, OnInit } from '@angular/core';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
    router.events.subscribe((event: RouterEvent) => {
      /* console.log(event) */
       this.navigationInterceptor(event);
    });
  }

  ngOnInit() {
    /*
      this.router.events.subscribe(event => {
            this.rota = event; // pega valor apos o /#/
            let rotaParse = this.rota.url.split('/');
            routerConfig.map(i => {
                if (this.validarRota == false) {
                    if ((i['path'] === rotaParse[1])) {
                        this.validarRota = true;
                    }
                }
            })
            this.validarDNS();
            this.getMenu(1, this.menus);
        });
    */
  }

  navigate(){
    this.router.navigate(['/scroll'])
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      console.log("teste1", event)
      /* this.loading = true; */
    }
    if (event instanceof NavigationEnd) {
      console.log("teste2", event)
      /* this.loading = false; */
    }
    if (event instanceof NavigationCancel) {
      console.log("teste3", event)
      /* this.loading = false; */
    }
    if (event instanceof NavigationError) {
      console.log("teste4", event)
      /* this.loading = false; */
    }
  }

}
