import { Component, ViewEncapsulation, Renderer2, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
//   encapsulation: ViewEncapsulation.Emulated
})

export class BlockComponent {
  @Input() title:string;
  @Input() subtitle:string;
  @Input() text:string;
  @Input() number:string;
  @Input() show360:boolean;
  @Input() showVideo:boolean;
  @Input() textIsLeft:boolean;
  @Input() showCollage:boolean;
  @Input() showButton:boolean;


  constructor(private renderer: Renderer2) { }
  panoramaV: Boolean = false;
  panoramaZ: Boolean = true;
  changeZ = undefined;
  resetV = undefined;
  scrollListener = undefined;

  dragCheck() {
    if (this.resetV != undefined) {
      clearTimeout(this.resetV);
    }
  }

  activate() {
    this.panoramaV = true;
    this.changeZ = setTimeout(() => {
      this.panoramaZ = false;
    }, 600)

    this.scrollListener = this.renderer.listen('document', 'scroll', () => {
      this.panoramaV = false;
      this.panoramaZ = true;
      clearTimeout(this.changeZ)
      clearTimeout(this.resetV)
    });
  }


  deactivate() {
    this.resetV = setTimeout(() => {
      if (this.changeZ != undefined) {
        clearTimeout(this.changeZ);
      }

      this.panoramaV = false;
      this.panoramaZ = true;
    }, 4000)

    if (typeof this.scrollListener == 'function') {
      this.scrollListener();
    }
  }
}