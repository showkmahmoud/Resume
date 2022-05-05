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
import { RightSideMenuComponent } from './components/right-side-menu/right-side-menu.component';
import { TuiLinkModule } from '@taiga-ui/core';

@NgModule({
  declarations: [SideMenuComponent, NavbarComponent, RightSideMenuComponent],
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
    TuiLinkModule,
  ],
  exports: [SideMenuComponent, NavbarComponent, RightSideMenuComponent],
})
export class CoreModule {}
