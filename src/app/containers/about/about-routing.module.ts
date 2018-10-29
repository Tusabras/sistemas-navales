import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CONTAINERS } from './containers';

const routes: Routes = [
  {path: '', component: CONTAINERS.MainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
