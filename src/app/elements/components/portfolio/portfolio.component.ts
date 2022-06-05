import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/data/user';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less'],
})
export class PortfolioComponent implements OnInit {
  user: any = user;
  constructor() {}

  ngOnInit(): void {}
}
