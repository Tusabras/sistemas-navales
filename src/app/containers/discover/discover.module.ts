import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoverRoutingModule } from './discover-routing.module';
import { GENERAL_COMPONENTS } from '../../components';
import { COMPONENTS } from './components';
import { CONTAINERS } from './containers';

@NgModule({
  imports: [
    CommonModule,
    DiscoverRoutingModule
  ],
  declarations: [
    GENERAL_COMPONENTS.SliderHeaderComponent,
    COMPONENTS.CollagesImagesComponent,
    COMPONENTS.BlockComponent,
    CONTAINERS.MainComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class DiscoverModule { }
