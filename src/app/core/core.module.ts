import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { TuiSidebarModule } from '@taiga-ui/addon-mobile';
import { TuiActiveZoneModule } from '@taiga-ui/cdk';
import {
  TuiButtonModule,
  TuiExpandModule,
  TuiScrollbarModule,
  TuiScrollIntoViewModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import { RouterModule } from '@angular/router';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
@NgModule({
  declarations: [SideMenuComponent, NavbarComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    TuiActiveZoneModule,
    TuiSidebarModule,
    TuiButtonModule,
    TuiExpandModule,
    TuiSvgModule,
    NgxBootstrapIconsModule.pick(allIcons),
    RouterModule,
    TuiScrollbarModule,
    TuiScrollIntoViewModule,
  ],
  exports: [SideMenuComponent, NavbarComponent],
})
export class CoreModule {}
