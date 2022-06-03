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
    '#1260d6',
    '#52bf00',
    '#d81300',
    '#BF55EC',
    '#00b4d9',
    '#425cbb',
    '#029A83',
    '#ABB7B7',
    '',
  ];
  themes: string[] = ['light', 'dark'];
  selectedColor: any;
  selectedTheme: any = 'light';
  constructor() {}

  ngOnInit(): void {
    this.updateStyles('#1260d6');
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
      item || '#0060ff'
    );
    document.documentElement.style.setProperty(
      '--tui-primary-hover',
      item || '#0060ff'
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
