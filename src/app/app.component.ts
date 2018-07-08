import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from './router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ routerTransition ]
})
export class AppComponent {

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  constructor(private router: Router) {}

  menu:boolean = false;

  public toggleMenu() {
    this.menu = !this.menu;
  }

}