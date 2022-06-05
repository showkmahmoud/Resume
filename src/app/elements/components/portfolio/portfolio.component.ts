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
  open = false;

  index = 0;

  onClick(): void {
    this.index = 0;
    this.open = true;
  }

  navigate(delta: number, length: number): void {
    this.index = (this.index + delta) % length;
  }
}
