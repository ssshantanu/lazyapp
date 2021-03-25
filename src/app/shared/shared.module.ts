import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { MainareaComponent } from './mainarea/mainarea.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  declarations: [HeaderComponent, MainareaComponent, FooterComponent, HomepageComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports :[HeaderComponent,MainareaComponent,FooterComponent,HomepageComponent]
})
export class SharedModule { }
