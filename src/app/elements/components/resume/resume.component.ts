import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/data/user';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.less'],
})
export class ResumeComponent implements OnInit {
  user: any = user;
  constructor() {}

  ngOnInit(): void {}
}
