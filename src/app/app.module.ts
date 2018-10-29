import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { HomeComponent } from './containers';
import { LIST_GENERAL_COMPONENTS, GENERAL_COMPONENTS } from './components';



import { ClothesService } from './shared/clothes.service';
import { GlobalService } from './shared/global.service';

@NgModule({
  declarations: [
    AppComponent,
    // ...LIST_GENERAL_COMPONENTS,
    GENERAL_COMPONENTS.LayoutComponent,
    GENERAL_COMPONENTS.FooterComponent,
    GENERAL_COMPONENTS.HeaderComponent,
    GENERAL_COMPONENTS.LinksComponent,
    GENERAL_COMPONENTS.NumbersComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'Sistemas navales'}),
    RouterModule.forRoot([
      // { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: '', loadChildren: './containers/discover/discover.module#DiscoverModule', pathMatch: 'full'},
      { path: 'contact', loadChildren: './containers/contact/contact.module#ContactModule'},
      // { path: 'stampa/more-details-item/*', loadChildren: './containers/stampa/stampa.module#StampaModule'},
      { path: 'charters-in-spain', loadChildren: './containers/charters/charters.module#ChartersModule'},
      { path: 'about', loadChildren: './containers/about/about.module#AboutModule'},
      // { path: 'notario', loadChildren: './containers/notario/notario.module#NotarioModule'},
      // { path: 'more-details-item/:uid', loadChildren: './containers/stampa/stampa.module#StampaModule'},
      // { path: 'stampa/more-details-item/:uid', loadChildren: './containers/stampa/stampa.module#StampaModule'},
      // { path: 'security', loadChildren: './containers/security/security.module#SecurityModule'},
    ]),
    HttpModule
  ],
  providers: [ClothesService, GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
