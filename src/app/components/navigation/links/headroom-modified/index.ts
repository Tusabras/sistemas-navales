// import * as head from './headroom.js';
// import { PLATFORM_ID } from '@angular/core';
// import { isPlatformBrowser, isPlatformServer } from '@angular/common';

// constructor(@Inject(PLATFORM_ID) private platformId: Object) { ... }

// ngOnInit() {

// if (isPlatformServer(this.platformId)) {
// // Server only code.
// ...
// }
// }
const head = require('./headroom.js');

export const Headroom = head;
