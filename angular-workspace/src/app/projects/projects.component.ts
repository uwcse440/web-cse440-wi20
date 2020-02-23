import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { Router } from "@angular/router";
import { ActivatedRoute} from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { projects as ProjectsData } from '../../data/projectsdata';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.rendered.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit, OnInit {
  projects = ProjectsData; // The list of data for all projects
  project = null; // Data for the project currently being presented in the modal

  selectedDeliverable = 1;

  constructor(
        @Inject(DOCUMENT) private document: Document,
        @Inject(PLATFORM_ID) private platformId: any,
        private router: Router,
        private route: ActivatedRoute,
        private modalService: NgbModal
  ) {
    this.route.params.subscribe(params => console.log(params));
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

  openProject(projectModal, project) {
    this.project = project;
    this.selectedDeliverable = 1;

    let modalRef = this.modalService.open(projectModal, {ariaLabelledBy: 'modal-basic-title', size: 'xl'});

    modalRef.result.then(
      (result) => {
        this.project = null;
        },
      (reason) => {
        this.project = null;
      }
    );

  }
}
