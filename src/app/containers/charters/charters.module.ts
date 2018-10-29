import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartersRoutingModule } from './charters-routing.module';
import { COMPONENTS } from './components';
import { CONTAINERS } from './containers';
import { GENERAL_COMPONENTS } from '../../components';

@NgModule({
  imports: [
    CommonModule,
    ChartersRoutingModule
  ],
  declarations: [
    GENERAL_COMPONENTS.SliderSubHeaderComponent,
    COMPONENTS.BlogComponent, 
    COMPONENTS.CalculatorComponent,
    COMPONENTS.ColorComponent,
    COMPONENTS.FiltersComponent,
    COMPONENTS.ListBlogsComponent,
    COMPONENTS.SizeComponent,
    
    CONTAINERS.ItemDetailsComponent,
    CONTAINERS.MainComponent
  ]
})
export class ChartersModule { }
