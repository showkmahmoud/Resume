import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { navbarItems, user } from 'src/app/data/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
})
export class NavbarComponent implements OnInit {
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter();
  user: any = user;
  items = navbarItems;
  menuOpen: boolean = true;

  constructor() {}

  ngOnInit(): void {}
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  onClick(item: any) {
    this.menuOpen = true;
    this.buttonClicked.emit(item);
  }
}
