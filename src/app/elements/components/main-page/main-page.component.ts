import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less'],
})
export class MainPageComponent implements OnInit {
  menuOpen: boolean = false;
  rightMenuOpen: boolean = false;
  mode: string = 'light';
  settingWidth: boolean = false;
  colors: string[] = [
    '0, 80, 211,',
    '234, 44, 25,',
    '0, 180, 217,',
    '191, 85, 236,',
    '2, 154, 131,',
    '246, 36, 89,',
  ];
  themes: string[] = ['light', 'dark'];
  selectedColor: any;
  selectedTheme: any = 'light';
  constructor() {}

  ngOnInit(): void {
    this.updateStyles('0, 80, 211,');
  }
  toggleMenu(menuOpen: boolean) {
    this.menuOpen = menuOpen;
  }
  toggleRightMenu(rightMenuOpen: boolean) {
    this.rightMenuOpen = rightMenuOpen;
  }
  onOpenStyleSettings() {
    this.settingWidth = !this.settingWidth;
  }
  onClose() {
    this.menuOpen = false;
  }
  onCloseRightMenu() {
    this.rightMenuOpen = false;
  }
  updateStyles(item: string) {
    // If empty assign default.
    document.documentElement.style.setProperty(
      '--tui-primary',
      'rgba(' + item + ' 1)' || '#0060ff'
    );
    document.documentElement.style.setProperty(
      '--tui-primary-hover',
      'rgba(' + item + ' .8)' || '#0060ff'
    );
    document.documentElement.style.setProperty(
      '--tui-primary-active',
      'rgba(' + item + ' 1)' || '#0060ff'
    );
    document.documentElement.style.setProperty(
      '--tui-overlay',
      'rgba(' + item + ' .4)' || '#0060ff'
    );
    this.selectedColor = item;
    this.settingWidth = false;
  }
  onChangeTheme(theme: string) {
    this.mode = theme;
    this.selectedTheme = theme;
    this.settingWidth = false;
  }
}
