import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less'],
})
export class MainPageComponent implements OnInit {
  menuOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  toggleMenu(menuOpen: boolean) {
    this.menuOpen = menuOpen;
  }
}
