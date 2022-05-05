import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { user } from 'src/app/data/user';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.less'],
})
export class SideMenuComponent implements OnInit {
  user: any = user;
  @Output() buttonClicked: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onDownload() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute(
      'href',
      'https://wbkijcvomvqhdrlrkszt.supabase.co/storage/v1/object/public/resume/CV.pdf'
    );
    link.setAttribute('download', `CV.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  onClose() {
    this.buttonClicked.emit(true);
  }
}
