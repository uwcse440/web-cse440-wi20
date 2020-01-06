import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { Router } from "@angular/router";

import { projects as ProjectsData } from '../../data/projectsdata';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.rendered.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit, OnInit {
  projects = ProjectsData;

  constructor(
        @Inject(DOCUMENT) private document: Document,
        @Inject(PLATFORM_ID) private platformId: any,
        private router: Router
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // If we're in the browser
    if (isPlatformBrowser(this.platformId)) {
      // If we're initialized with an anchor, navigate to that anchor, otherwise to the top
      let element = null;
      let fragment = this.router.parseUrl(this.router.url).fragment;
      if (fragment) {
        element = this.document.querySelector('#' + fragment);
      }
      if (element) {
        element.scrollIntoView();
      } else {
        this.document.scrollingElement.scroll(0, 0);
      }
    }
  }
}
