import { Component, OnInit } from '@angular/core';
import { dataFormation } from './data-formations';
import {
  trigger,
  transition,
  query,
  stagger,
  animate,
  style,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('void => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(
          ':enter',
          stagger('200ms', [
            animate(
              '1s ease-in',
              keyframes([
                style({
                  opacity: 0,
                  transform: 'translateY(-75px)',
                  offset: 0,
                }),
                style({
                  opacity: 0.5,
                  transform: 'translateY(35px)',
                  offset: 0.3,
                }),
                style({ opacity: 1, transform: 'translateY(0px)', offset: 1 }),
              ])
            ),
          ]),
          { optional: true }
        ),
        query(
          ':leave',
          stagger('100ms', [
            animate(
              '0.7s ease-in',
              keyframes([
                style({ opacity: 1, transform: 'translateY(0px)', offset: 0 }),
                style({
                  opacity: 0.5,
                  transform: 'translateY(35px)',
                  offset: 0.3,
                }),
                style({
                  opacity: 0,
                  transform: 'translateY(-75px)',
                  offset: 1,
                }),
              ])
            ),
          ]),
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class FormationsComponent implements OnInit {
  dataFormation = dataFormation;

  constructor() {}

  ngOnInit(): void {}
}
