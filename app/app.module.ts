import { NgModule, ModuleWithProviders, enableProdMode } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar.component';
import { NavbarComponent, NGRepeatLastDirective } from './navbar.component';
import { SourceTabComponent } from './sourcetab.component';

import { SharedModule } from './shared.module';

export const appRoutes: Routes = [
  { path: 'showcase', loadChildren: './components/showcase/showcase.module#ShowcaseModule', data: { category: 'Showcase' } },
  { path: 'grid', loadChildren: './components/grid/grid.module#GridModule', data: { category: 'Grids', name: 'Grid' } },
  { path: 'treegrid', loadChildren: './components/treegrid/treegrid.module#TreeGridModule', data: { category: 'Grids', name: 'TreeGrid' } },
  { path: 'spreadsheet', loadChildren: './components/spreadsheet/spreadsheet.module#SpreadsheetModule', data: { category: 'Grids', name: 'Spreadsheet' } },
  { path: 'buttons', loadChildren: './components/buttons/buttons.module#ButtonsModule', data: { category: 'Navigation', name: 'Button' } },
  { path: 'listbox', loadChildren: './components/listbox/listbox.module#ListBoxModule', data: { category: 'Navigation', name: 'ListBox' } },
  { path: 'menu', loadChildren: './components/menu/menu.module#MenuModule', data: { category: 'Navigation', name: 'Menu' } },
  { path: 'tab', loadChildren: './components/tab/tab.module#TabModule', data: { category: 'Navigation', name: 'Tab' } },
  { path: 'ribbon', loadChildren: './components/ribbon/ribbon.module#RibbonModule', data: { category: 'Navigation', name: 'Ribbon' } },
  { path: 'treeview', loadChildren: './components/treeview/treeview.module#TreeViewModule', data: { category: 'Navigation', name: 'TreeView' } },
  { path: 'rotator', loadChildren: './components/rotator/rotator.module#RotatorModule', data: { category: 'Navigation', name: 'Rotator' } },
  { path: 'accordion', loadChildren: './components/accordion/accordion.module#AccordionModule', data: { category: 'Navigation', name: 'Accordion' } },
  { path: 'fileexplorer', loadChildren: './components/fileexplorer/fileexplorer.module#FileExplorerModule', data: { category: 'Navigation', name: 'FileExplorer' } },
  { path: 'navigationdrawer', loadChildren: './components/navigationdrawer/navigationdrawer.module#NavigationDrawerModule', data: { category: 'Navigation', name: 'NavigationDrawer' } },
  { path: 'toolbar', loadChildren: './components/toolbar/toolbar.module#ToolbarModule', data: { category: 'Navigation', name: 'ToolBar' } },
  { path: 'radialmenu', loadChildren: './components/radialmenu/radialmenu.module#RadialMenuModule', data: { category: 'Navigation', name: 'RadialMenu' } },

  { path: 'splitter', loadChildren: './components/splitter/splitter.module#SplitterModule', data: { category: 'Layout', name: 'Splitter' } },
  { path: 'tile', loadChildren: './components/tile/tile.module#TileModule', data: { category: 'Layout', name: 'Tile' } },
  { path: 'dialog', loadChildren: './components/dialog/dialog.module#DialogModule', data: { category: 'Layout', name: 'Dialog' } },
  { path: 'scroller', loadChildren: './components/scroller/scroller.module#ScrollerModule', data: { category: 'Layout', name: 'Scroller' } },
  { path: 'tooltip', loadChildren: './components/tooltip/tooltip.module#TooltipModule', data: { category: 'Layout', name: 'Tooltip' } },
  { path: 'listview', loadChildren: './components/listview/listview.module#ListViewModule', data: { category: 'Layout', name: 'ListView' } },

  { path: 'schedule', loadChildren: './components/schedule/schedule.module#ScheduleModule', data: { category: 'Data Visualization', name: 'Schedule' } },
  { path: 'kanban', loadChildren: './components/kanban/kanban.module#KanbanModule', data: { category: 'Data Visualization', name: 'Kanban Board' } },
  { path: 'barcode', loadChildren: './components/barcode/barcode.module#BarcodeModule', data: { category: 'Data Visualization', name: 'Barcode' } },
  { path: 'diagram', loadChildren: './components/diagram/diagram.module#DiagramModule', data: { category: 'Data Visualization', name: 'Diagram' } },
  { path: 'map', loadChildren: './components/map/map.module#MapModule', data: { category: 'Data Visualization', name: 'Map' } },
  { path: 'heatmap', loadChildren: './components/heatmap/heatmap.module#HeatMapModule', data: { category: 'Data Visualization', name: 'HeatMap' } },
  { path: 'treemap', loadChildren: './components/treemap/treemap.module#TreeMapModule', data: { category: 'Data Visualization', name: 'TreeMap' } },
  { path: 'gantt', loadChildren: './components/gantt/gantt.module#GanttModule', data: { category: 'Data Visualization', name: 'Gantt' } },
  { path: 'chart', loadChildren: './components/chart/chart.module#ChartModule', data: { category: 'Data Visualization', name: 'Chart' } },
  { path: 'sparkline', loadChildren: './components/sparkline/sparkline.module#SparklineModule', data: { category: 'Data Visualization', name: 'Sparkline' } },
  { path: 'sunburst', loadChildren: './components/sunburst/sunburst.module#SunburstModule', data: { category: 'Data Visualization', name: 'Sunburst Chart' } },
  { path: 'lineargauge', loadChildren: './components/lineargauge/lineargauge.module#LinearGaugeModule', data: { category: 'Data Visualization', name: 'Linear Gauge' } },
  { path: 'circulargauge', loadChildren: './components/circulargauge/circulargauge.module#CircularGaugeModule', data: { category: 'Data Visualization', name: 'Circular Gauge' } },
  { path: 'digitalgauge', loadChildren: './components/digitalgauge/digitalgauge.module#DigitalGaugeModule', data: { category: 'Data Visualization', name: 'Digital Gauge' } },
  { path: 'bulletgraph', loadChildren: './components/bulletgraph/bulletgraph.module#BulletGraphModule', data: { category: 'Data Visualization', name: 'Bullet Graph' } },
  { path: 'rangenavigator', loadChildren: './components/rangenavigator/rangenavigator.module#RangeNavigatorModule', data: { category: 'Data Visualization', name: 'Range Navigator' } },
  { path: 'tagcloud', loadChildren: './components/tagcloud/tagcloud.module#TagCloudModule', data: { category: 'Data Visualization', name: 'Tag Cloud' } },

  { path: 'datepicker', loadChildren: './components/datepicker/datepicker.module#DatePickerModule', data: { category: 'Editors', name: 'DatePicker' } },
  { path: 'datetimepicker', loadChildren: './components/datetimepicker/datetimepicker.module#DateTimePickerModule', data: { category: 'Editors', name: 'DateTimePicker' } },
  { path: 'daterangepicker', loadChildren: './components/daterangepicker/daterangepicker.module#DateRangePickerModule', data: { category: 'Editors', name: 'DateRangePicker' } },
  { path: 'timepicker', loadChildren: './components/timepicker/timepicker.module#TimePickerModule', data: { category: 'Editors', name: 'TimePicker' } },
  { path: 'autocomplete', loadChildren: './components/autocomplete/autocomplete.module#AutocompleteModule', data: { category: 'Editors', name: 'Autocomplete' } },
  { path: 'colorpicker', loadChildren: './components/colorpicker/colorpicker.module#ColorPickerModule', data: { category: 'Editors', name: 'ColorPicker' } },
  { path: 'signature', loadChildren: './components/signature/signature.module#SignatureModule', data: { category: 'Editors', name: 'Signature' } },
  { path: 'uploadbox', loadChildren: './components/uploadbox/uploadbox.module#UploadBoxModule', data: { category: 'Editors', name: 'UploadBox' } },
  { path: 'progressbar', loadChildren: './components/progressbar/progressbar.module#ProgressbarModule', data: { category: 'Notification', name: 'ProgressBar' } },
  { path: 'waitingpopup', loadChildren: './components/waitingpopup/waitingpopup.module#WaitingPopupModule', data: { category: 'Notification', name: 'WaitingPopup' } },
  { path: 'rte', loadChildren: './components/rte/rte.module#RTEModule', data: { category: 'Editors', name: 'RTE' } },
  { path: 'dropdownlist', loadChildren: './components/dropdownlist/dropdownlist.module#DropDownListModule', data: { category: 'Editors', name: 'DropDownList' } },
  { path: 'combobox', loadChildren: './components/combobox/combobox.module#ComboBoxModule', data: { category: 'Editors', name: 'ComboBox' } },
  { path: 'rating', loadChildren: './components/rating/rating.module#RatingModule', data: { category: 'Editors', name: 'Rating' } },
  { path: 'radialslider', loadChildren: './components/radialslider/radialslider.module#RadialSliderModule', data: { category: 'Editors', name: 'RadialSlider' } },
  { path: 'slider', loadChildren: './components/slider/slider.module#SliderModule', data: { category: 'Editors', name: 'Slider' } },
  { path: 'textboxes', loadChildren: './components/textboxes/textboxes.module#TextboxesModule', data: { category: 'Editors', name: 'TextBoxes' } },
  { path: 'spellcheck', loadChildren: './components/spellcheck/spellcheck.module#SpellCheckModule', data: { category: 'Editors', name: 'SpellCheck' } },

  { path: 'pivotgrid', loadChildren: './components/pivotgrid/pivotgrid.module#PivotGridModule', data: { category: 'Business Intelligence', name: 'PivotGrid' } },
  { path: 'pivotchart', loadChildren: './components/pivotchart/pivotchart.module#PivotChartModule', data: { category: 'Business Intelligence', name: 'PivotChart' } },
  { path: 'pivotclient', loadChildren: './components/pivotclient/pivotclient.module#PivotClientModule', data: { category: 'Business Intelligence', name: 'PivotClient' } },
  { path: 'pivotgauge', loadChildren: './components/pivotgauge/pivotgauge.module#PivotGaugeModule', data: { category: 'Business Intelligence', name: 'PivotGauge' } },
  { path: 'pivottreemap', loadChildren: './components/pivottreemap/pivottreemap.module#PivotTreeMapModule', data: { category: 'Business Intelligence', name: 'PivotTreeMap' } },
  { path: 'pdfviewer', loadChildren: './components/pdfviewer/pdfviewer.module#PdfViewerModule', data: { category: 'File Viewer', name: 'PDF Viewer' } },

  { path: '', redirectTo: '/showcase', pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });

@NgModule({
  imports: [SharedModule, BrowserModule, RouterModule, HttpModule, routing, FormsModule],
  declarations: [AppComponent, ToolbarComponent, SourceTabComponent, NavbarComponent, NGRepeatLastDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}

export class Route {
  name: string;
  path: string;
  type: string;
}

enableProdMode();


