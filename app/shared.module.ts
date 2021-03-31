import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EJ_MENU_COMPONENTS } from 'ej-angular2/src/ej/menu.component';
import { EJ_WAITINGPOPUP_COMPONENTS } from 'ej-angular2/src/ej/waitingpopup.component';
import { EJ_NUMERICTEXTBOX_COMPONENTS } from 'ej-angular2/src/ej/numerictextbox.component';
import { EJ_CIRCULARGAUGE_COMPONENTS } from 'ej-angular2/src/ej/circulargauge.component';
import { EJ_GRID_COMPONENTS } from 'ej-angular2/src/ej/grid.component';
import { EJ_TAB_COMPONENTS } from 'ej-angular2/src/ej/tab.component';
import { EJ_TOOLBAR_COMPONENTS } from 'ej-angular2/src/ej/toolbar.component';
import { EJ_LISTBOX_COMPONENTS } from 'ej-angular2/src/ej/listbox.component';
import { EJ_RTE_COMPONENTS } from 'ej-angular2/src/ej/rte.component';
import { EJ_BUTTON_COMPONENTS } from 'ej-angular2/src/ej/button.component';
import { EJ_CHECKBOX_COMPONENTS } from 'ej-angular2/src/ej/checkbox.component';
import { EJ_RATING_COMPONENTS } from 'ej-angular2/src/ej/rating.component';
import { EJ_TOOLTIP_COMPONENTS } from 'ej-angular2/src/ej/tooltip.component';
import { EJ_DIALOG_COMPONENTS } from 'ej-angular2/src/ej/dialog.component';
import { EJ_DROPDOWNLIST_COMPONENTS } from 'ej-angular2/src/ej/dropdownlist.component';
import { EJ_RADIOBUTTON_COMPONENTS } from 'ej-angular2/src/ej/radiobutton.component';
import { EJ_SLIDER_COMPONENTS } from 'ej-angular2/src/ej/slider.component';
import { EJ_PIVOTSCHEMADESIGNER_COMPONENTS } from 'ej-angular2/src/ej/pivotschemadesigner.component';
import { EJ_PIVOTPAGER_COMPONENTS } from 'ej-angular2/src/ej/pivotpager.component';
import { EJ_CHART_COMPONENTS } from 'ej-angular2/src/ej/chart.component';
import { EJ_RANGENAVIGATOR_COMPONENTS } from 'ej-angular2/src/ej/rangenavigator.component';
import { EJ_COMBOBOX_COMPONENTS } from 'ej-angular2/src/ej/combobox.component';
import { EJTemplateDirective } from 'ej-angular2/src/ej/template';

import { LoggerComponent } from './logger.component';

@NgModule({
    imports: [CommonModule],
    declarations: [EJTemplateDirective, LoggerComponent, EJ_DIALOG_COMPONENTS, EJ_LISTBOX_COMPONENTS, EJ_COMBOBOX_COMPONENTS,
        EJ_TAB_COMPONENTS, EJ_TOOLBAR_COMPONENTS, EJ_RTE_COMPONENTS, EJ_BUTTON_COMPONENTS, EJ_CHECKBOX_COMPONENTS,
        EJ_RATING_COMPONENTS, EJ_TOOLTIP_COMPONENTS, EJ_DROPDOWNLIST_COMPONENTS, EJ_RADIOBUTTON_COMPONENTS,
        EJ_SLIDER_COMPONENTS, EJ_PIVOTSCHEMADESIGNER_COMPONENTS, EJ_PIVOTPAGER_COMPONENTS, EJ_CHART_COMPONENTS, EJ_RANGENAVIGATOR_COMPONENTS,
        EJ_GRID_COMPONENTS, EJ_CIRCULARGAUGE_COMPONENTS, EJ_NUMERICTEXTBOX_COMPONENTS, EJ_WAITINGPOPUP_COMPONENTS, EJ_MENU_COMPONENTS],
    exports: [EJTemplateDirective, LoggerComponent, EJ_DIALOG_COMPONENTS, EJ_LISTBOX_COMPONENTS, EJ_TAB_COMPONENTS, EJ_TOOLBAR_COMPONENTS, EJ_RTE_COMPONENTS,
        EJ_BUTTON_COMPONENTS, EJ_CHECKBOX_COMPONENTS, EJ_RATING_COMPONENTS, EJ_TOOLTIP_COMPONENTS, EJ_DROPDOWNLIST_COMPONENTS, EJ_RADIOBUTTON_COMPONENTS, EJ_SLIDER_COMPONENTS,
        EJ_PIVOTSCHEMADESIGNER_COMPONENTS, EJ_PIVOTPAGER_COMPONENTS, EJ_CHART_COMPONENTS, EJ_RANGENAVIGATOR_COMPONENTS,
        EJ_GRID_COMPONENTS, EJ_CIRCULARGAUGE_COMPONENTS, EJ_NUMERICTEXTBOX_COMPONENTS, EJ_WAITINGPOPUP_COMPONENTS, EJ_MENU_COMPONENTS, EJ_COMBOBOX_COMPONENTS]
})

export class SharedModule {
}
