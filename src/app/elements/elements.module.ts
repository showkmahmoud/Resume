import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';

import { TuiActiveZoneModule } from '@taiga-ui/cdk';
import { CoreModule } from '../core/core.module';
import { TuiSidebarModule } from '@taiga-ui/addon-mobile';
import { TuiScrollbarModule } from '@taiga-ui/core';
import { TuiAccordionModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [
    MainPageComponent,
    HomeComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    TuiActiveZoneModule,
    CoreModule,
    TuiSidebarModule,
    TuiAccordionModule,
    TuiScrollbarModule,
  ],
})
export class ElementsModule {}
