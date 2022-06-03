import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/data/user';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less'],
})
export class SkillsComponent implements OnInit {
  user: any = user;
  constructor() {}

  ngOnInit(): void {}
}
