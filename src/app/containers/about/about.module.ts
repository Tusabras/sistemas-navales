import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { COMPONENTS } from './components';
import { CONTAINERS } from './containers';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  declarations: [
    CONTAINERS.MainComponent 
  ]
})
export class AboutModule { }
