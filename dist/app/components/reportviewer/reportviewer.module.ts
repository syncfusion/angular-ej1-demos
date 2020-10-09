import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './../../shared.module';
// import { TerritorySalesComponent } from './territorysales.component';
import { GroupingAggregateComponent } from './groupingaggregate.component';
import { AreaChartComponent } from './areachart.component';

export const reportviewerAppRoutes: Routes = [
    // { path: 'territorysales', component: TerritorySalesComponent, data: { name: 'TerritorySales', location: 'app/components/reportviewer/territorysales.component' } },
    { path: 'groupingaggregate', component: GroupingAggregateComponent, data: { name: 'GroupingAggregate', location: 'app/components/reportviewer/groupingaggregate.component' } },
    { path: 'areachart', component: AreaChartComponent, data: { name: 'AreaChart', location: 'app/components/reportviewer/areachart.component' } },
    { path: '', redirectTo: 'groupingaggregate' }
];

export const ReportViewerRouting = RouterModule.forChild(reportviewerAppRoutes);

@NgModule({
    imports: [ReportViewerRouting, SharedModule],
    // declarations: [TerritorySalesComponent, GroupingAggregateComponent, AreaChartComponent]
    declarations: [GroupingAggregateComponent, AreaChartComponent]
})
export class ReportViewerModule {
}
