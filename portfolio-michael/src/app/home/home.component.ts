import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  query,
  stagger,
  animate,
  style,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('cardAnimation', [
      transition('void => *', [
        query('.card', style({ opacity: 0, transform: 'translateX(-40px)' })),
        query(
          '.card',
          stagger('500ms', [
            animate(
              '800ms 1.2s ease-out',
              style({ opacity: 1, transform: 'translateX(0)' })
            ),
          ])
        ),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
