import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-right-side-menu',
  templateUrl: './right-side-menu.component.html',
  styleUrls: ['./right-side-menu.component.less'],
})
export class RightSideMenuComponent implements OnInit {
  @Output() buttonClicked: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onClose() {
    this.buttonClicked.emit(true);
  }
}
