import { Component, OnInit } from '@angular/core';
import { dataFormation } from './data-formations';
@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss'],
})
export class FormationsComponent implements OnInit {
  dataFormation = dataFormation;

  constructor() {}

  ngOnInit(): void {}
}
