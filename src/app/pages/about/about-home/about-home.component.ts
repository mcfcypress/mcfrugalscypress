import { Component, OnInit } from '@angular/core';
import {trigger, stagger, animate, style, group, query, transition, keyframes} from '@angular/animations';


export const pageTransition = trigger('pageTransition', [
  transition(':enter', [
    query('article', style({ opacity: 0 }), {optional: true}),
    query('article', stagger(500, [
      style({ transform: 'translateY(100px)' }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0px)', opacity: 1})),
    ]), {optional: true}),
  ]),
  transition(':leave', [
    query('article', stagger(50, [
      style({ transform: 'translateY(0px)', opacity: 1 }),
      animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
    ]), {optional: true}),        
  ])
]);


@Component({
  selector: 'app-about-home',
  templateUrl: './about-home.component.html',
  styleUrls: ['./about-home.component.scss'],
  animations: [ pageTransition ],
  host: {
    '[@pageTransition]': ''
  }
})
export class AboutHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}