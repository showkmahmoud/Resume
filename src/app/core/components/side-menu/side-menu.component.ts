import { Component, OnInit } from '@angular/core';
import { user, userImg } from 'src/app/data/user';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.less'],
})
export class SideMenuComponent implements OnInit {
  user: any = user;
  img: string = userImg;
  Object = Object;

  constructor() {}

  ngOnInit(): void {}
}
