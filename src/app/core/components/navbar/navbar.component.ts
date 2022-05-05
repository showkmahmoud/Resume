import { Component, OnInit } from '@angular/core';
import { navbarItems, user } from 'src/app/data/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
})
export class NavbarComponent implements OnInit {
  user: any = user;
  items = navbarItems;
  constructor() {}

  ngOnInit(): void {}
}
