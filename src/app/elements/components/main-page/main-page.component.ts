import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less'],
})
export class MainPageComponent implements OnInit {
  menuOpen: boolean = false;
  rightMenuOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  toggleMenu(menuOpen: boolean) {
    this.menuOpen = menuOpen;
  }
  toggleRightMenu(rightMenuOpen: boolean) {
    this.rightMenuOpen = rightMenuOpen;
  }
  onClose() {
    this.menuOpen = false;
  }
  onCloseRightMenu() {
    this.rightMenuOpen = false;
  }
}
