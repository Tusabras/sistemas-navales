import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { GENERAL_COMPONENTS } from '../../components';
import { COMPONENTS } from './components';
import { CONTAINERS } from './containers';
// import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyDzLrY6uk41zNHJrAYfc8LrL8AFHutc6J4'
    // })
  ],
  declarations: [
    // GENERAL_COMPONENTS.SliderHeaderComponent,
    COMPONENTS.MapComponent,
    CONTAINERS.MainComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class ContactModule { }
