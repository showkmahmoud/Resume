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
import { TuiButtonModule, TuiScrollbarModule } from '@taiga-ui/core';
import { TuiAccordionModule } from '@taiga-ui/kit';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { EducationComponent } from './components/education/education.component';
import { TuiLinkModule } from '@taiga-ui/core';

@NgModule({
  declarations: [
    MainPageComponent,
    HomeComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent,
    EducationComponent,
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    TuiActiveZoneModule,
    CoreModule,
    TuiSidebarModule,
    TuiAccordionModule,
    TuiScrollbarModule,
    TuiButtonModule,
    NgxBootstrapIconsModule.pick(allIcons),
    TuiLinkModule,
  ],
})
export class ElementsModule {}
