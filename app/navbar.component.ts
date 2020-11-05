import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
   selector: 'ngrepeat-last',
   template: ''
})
export class NGRepeatLastDirective {
    @Input() isLast: boolean;
    ngOnInit() {
        if (this.isLast) {
            let toolbarSubMenu = $('#category-child-toolbar').data('ejToolbar');
            if (toolbarSubMenu) {
                toolbarSubMenu.option('model.targetID', 'null');
                toolbarSubMenu.option('targetID', 'subCategoryToolbar');
            }
        }
    }
}
@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    @Input() categoryList: Array<any>;
    parentRoutes: Array<any> = [];
    divdisplay: string;
    constructor(private router: Router) {
        this.divdisplay = 'none';
    }

    showParentRoutes(event, catItems) {
        this.divdisplay = 'block';
          if (catItems[0].name == undefined) {
            this.divdisplay = 'none';
            this.router.navigateByUrl(catItems[0].path);
        }
        this.parentRoutes = catItems;
    }
}
