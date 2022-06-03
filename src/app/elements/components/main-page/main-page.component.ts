import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less'],
})
export class MainPageComponent implements OnInit {
  menuOpen: boolean = false;
  rightMenuOpen: boolean = false;
  value: any = {
    mode: 'light',
    primaryColor: '',
  };
  settingWidth: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.updateStyles();
  }
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
  updateStyles() {
    // If empty assign default.
    document.documentElement.style.setProperty(
      '--tui-primary',
      this.value.primaryColor || '#0060ff'
    );

    // TODO - Depending on the mode, different styles will be applied,
    if (this.value.mode) {
    } else {
    }
  }
  onChangeStyle() {
    this.settingWidth = !this.settingWidth;
    //   if (this.settingWidth) {
    //     this.settingWidth = 0;
    //   } else {
    //     this.settingWidth = 400;
    //   }
  }
}
