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
  itemIndex = 0;
  index = 0;
  onClick(i: number): void {
    this.index = 0;
    this.itemIndex = i;
    this.open = true;
  }
  get background(): any {
    for (
      this.index;
      this.index <=
      this.user.portfolio.content[this.itemIndex].content.imgs.length;
      this.index++
    ) {
      return `url(${
        this.user.portfolio.content[this.itemIndex].content.imgs[this.index]
      })`;
    }
  }

  navigate(delta: number, length: number): void {
    this.index = (this.index + delta) % length;
  }
}
