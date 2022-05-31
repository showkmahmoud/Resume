import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/data/user';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.less'],
})
export class EducationComponent implements OnInit {
  user: any = user;
  constructor() {}

  ngOnInit(): void {}
}
