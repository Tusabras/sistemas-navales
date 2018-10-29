import { Component, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit{
  mounted = false;
  constructor(private router: Router) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.mounted = true;
    }, 500);
  }

}
