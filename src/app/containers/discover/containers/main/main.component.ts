import { Component, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.Native
})

export class MainComponent {

  constructor() { }

}