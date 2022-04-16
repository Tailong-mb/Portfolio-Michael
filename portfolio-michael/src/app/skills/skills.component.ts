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
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('skillsAnimation', [
      transition('void => *', [
        query('.card', style({ opacity: 0, transform: 'translateX(-40px)' })),
        query(
          '.card',
          stagger('300ms', [
            animate(
              '500ms 1s ease-out',
              style({ opacity: 1, transform: 'translateX(0)' })
            ),
          ])
        ),
      ]),
    ]),
  ],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
