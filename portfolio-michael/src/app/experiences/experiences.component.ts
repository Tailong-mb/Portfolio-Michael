import { Component, OnInit } from '@angular/core';
import { dataExperience } from './data-experiences';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements OnInit {
  dataExperience = dataExperience;

  constructor() {}

  ngOnInit(): void {}
}
