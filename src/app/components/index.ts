import {LayoutComponent, HeaderComponent, FooterComponent} from './layout';
import { NumbersComponent } from './navigation/numbers/numbers.component';
import { LinksComponent } from './navigation/links/links.component';
import { SliderHeaderComponent } from './slider-header';
import { SliderSubHeaderComponent } from './slider-subheader';

export const GENERAL_COMPONENTS = {
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    LinksComponent,
    NumbersComponent,
    SliderHeaderComponent,
    SliderSubHeaderComponent
};
export const LIST_GENERAL_COMPONENTS = Object.values(GENERAL_COMPONENTS);