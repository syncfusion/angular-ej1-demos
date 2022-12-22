import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from './../../shared.module';

import { DefaultComponent } from './default.component';

import { ColumnComponent } from './column.component';

import { PieComponent } from './pie.component';

import { BarComponent } from './bar.component';

import { PolarComponent } from './polar.component';

import { Column3DComponent } from './column3d.component';

import { Pie3DComponent } from './pie3d.component';

import { PyramidComponent } from './pyramid.component';

import { CombinationComponent } from './combination.component';

import { ZoomingComponent } from './zooming.component';

import { BubbleComponent } from './bubble.component';

import { CandleComponent } from './candle.component';

import { LiveComponent } from './live.component';

import { Bar3DComponent } from './bar3d.component';

import { Doughnut3DComponent } from './doughnut3d.component';

import { StackingColumn3dComponent } from './stackingColumn3d.component';

import { StackingColumn3d100Component } from './stackingColumn3d100.component';

import { AccumulationComponent } from './accumulation.component';

import { AlternategridbandComponent } from './alternategridband.component';

import { AnimationComponent } from './animation.component';

import { AnnotationComponent } from './annotation.component';

import { AreaComponent } from './area.component';

import { AtrComponent } from './atr.component';

import { AxisCrossingComponent } from './axisCrossing.component';

import { BollingerbandComponent } from './bollingerband.component';

import { CrosshairComponent } from './crosshair.component';

import { DatetimeComponent } from './datetime.component';

import { DatetimeCategoryComponent } from './datetimeCategory.component';

import { DoughnutComponent } from './doughnut.component';

import { DraganddropComponent } from './drag.component';

import { DrilldownComponent } from './drilldown.component';

import { EmaComponent } from './ema.component';

import { EmptyComponent } from './empty.component';

import { ErrorbarComponent } from './errorbar.component';

import { EventsComponent } from './events.component';

import { ExportComponent } from './export.component';

import { FunnelComponent } from './funner.component';

import { HiloComponent } from './hilo.component';

import { HiloOpenCloseComponent } from './openClose.component';

import { InversedAxisComponent } from './inversed.component';

import { IndexedComponent } from './indexd.component';

import { LabelComponent } from './label.component';

import { LegendComponent } from './legend.component';

import { LocalComponent } from './local.component';

import { LocalizationComponent } from './localization.component';

import { LogComponent } from './log.component';

import { MacdComponent } from './macd.component';

import { MomentumComponent } from './momentum.component';

import { ColorComponent } from './color.component';

import { MultilevelComponent } from './multilevel.component';

import { MultiAxesComponent } from './multiAxes.component';

import { MultiPieComponent } from './multiPie.component';

import { MultiSelectionComponent } from './multiSelection.component';

import { PerformanceComponent } from './performance.component';

import { RadarComponent } from './radar.component';

import { RangeAreaComponent } from './rangeArea.component';

import { RangeColumnComponent } from './rangeColumn.component';

import { RemoteComponent } from './remote.component';

import { RowComponent } from './row.component';

import { RsiComponent } from './rsi.component';

import { ScatterComponent } from './scatter.component';

import { SelectionComponent } from './selection.component';

import { SemiPieComponent } from './semiPie.component';

import { SmaComponent } from './sma.component';

import { SmartAxisComponent } from './smartAxis.component';

import { SmartLabelComponent } from './smartLabel.component';

import { SplineComponent } from './spline.component';

import { SplineAreaComponent } from './splineArea.component';

import { StackingAreaComponent } from './stackingArea.component';

import { StackingArea100Component } from './stackingArea100.component';

import { StackingBarComponent } from './stackingBar.component';

import { StackingBar100Component } from './stackingBar100.component';

import { ColumnStackComponent } from './stackingColumn.component';

import { ColumnStack100Component } from './stackingColumn100.component';

import { StepAreaComponent } from './stepArea.component';

import { StepLineComponent } from './stepLine.component';

import { StochasticComponent } from './stochastic.component';

import { StriplineComponent } from './stripline.component';

import { SubtitleComponent } from './subtitle.component';

import { SymbolComponent } from './symbol.component';

import { TitleComponent } from './title.component';

import { TmaComponent } from './tma.component';

import { TooltipComponent } from './tooltip.component';

import { TrackballComponent } from './trackball.component';

import { TrendlineComponent } from './trendline.component';

import { VerticalComponent } from './vertical.component';

import { VirtualComponent } from './virtual.component';

import { WaterfallComponent } from './water.component';

import { WindroseComponent } from './wind.component';

import { BoxComponent } from './box.component';

import { PieofPieComponent } from './pieofpie.component';



export const chartAppRoutes: Routes = [

{ path: 'default', component: DefaultComponent, data: { name: 'Default', location: 'app/components/chart/default.component' } },
{ path: 'column', component: ColumnComponent, data: { name: 'Column', location: 'app/components/chart/column.component' } },
{ path: 'pie', component: PieComponent, data: { name: 'Pie', location: 'app/components/chart/pie.component' } },
{ path: 'bar', component: BarComponent, data: { name: 'Bar', location: 'app/components/chart/bar.component' } },
{ path: 'polar', component: PolarComponent, data: { name: 'Polar', location: 'app/components/chart/polar.component' } },
{ path: 'column3d', component: Column3DComponent, data: { name: '3DColumn', location: 'app/components/chart/column3d.component' } },
{ path: 'pie3d', component: Pie3DComponent, data: { name: '3DPie', location: 'app/components/chart/pie3d.component' } },
{ path: 'pyramid', component: PyramidComponent, data: { name: 'Pyramid', location: 'app/components/chart/pyramid.component' } },
{ path: 'combination', component: CombinationComponent, data: { name: 'Combination', location: 'app/components/chart/combination.component' } },
{ path: 'zooming', component: ZoomingComponent, data: { name: 'Zooming', location: 'app/components/chart/zooming.component' } },
{ path: 'bubble', component: BubbleComponent, data: { name: 'Bubble', location: 'app/components/chart/bubble.component' } },
{ path: 'candle', component: CandleComponent, data: { name: 'Candle', location: 'app/components/chart/candle.component' } },
{ path: 'live', component: LiveComponent, data: { name: 'Live', location: 'app/components/chart/live.component' } },
{ path: 'bar3d', component: Bar3DComponent, data: { name: '3dbar', location: 'app/components/chart/bar3d.component' } },
{ path: 'doughnut3d', component: Doughnut3DComponent, data: { name: '3ddoughnut', location: 'app/components/chart/doughnut3d.component' } },
{ path: 'stackingColumn3d', component: StackingColumn3dComponent, data: { name: '3dstackingColumn', location: 'app/components/chart/stackingColumn3d.component' } },
{ path: 'stackingColumn3d100', component: StackingColumn3d100Component, data: { name: '3dstackingColumn100', location: 'app/components/chart/stackingColumn3d100.component' } },
{ path: 'accumulation', component: AccumulationComponent, data: { name: 'Accumulation Distribution', location: 'app/components/chart/accumulation.component' } },
{ path: 'alternategridband', component: AlternategridbandComponent, data: { name: 'Alternate Grid Band', location: 'app/components/chart/alternategridband.component' } },
{ path: 'animation', component: AnimationComponent, data: { name: 'Animation', location: 'app/components/chart/animation.component' } },
{ path: 'annotation', component: AnnotationComponent, data: { name: 'Annotations', location: 'app/components/chart/annotation.component' } },
{ path: 'area', component: AreaComponent, data: { name: 'Area', location: 'app/components/chart/area.component' } },
{ path: 'atr', component: AtrComponent, data: { name: 'ATR', location: 'app/components/chart/atr.component' } },
{ path: 'axisCrossing', component: AxisCrossingComponent, data: { name: 'Axis Crossing', location: 'app/components/chart/axisCrossing.component' } },
{ path: 'bollingerband', component: BollingerbandComponent, data: { name: 'Bollinger Band', location: 'app/components/chart/bollingerband.component' } },
{ path: 'crosshair', component: CrosshairComponent, data: { name: 'Crosshair', location: 'app/components/chart/crosshair.component' } },
{ path: 'datetime', component: DatetimeComponent, data: { name: 'Datetime', location: 'app/components/chart/datetime.component' } },
{ path: 'datetimeCategory', component: DatetimeCategoryComponent, data: { name: 'Datetime Category', location: 'app/components/chart/datetimeCategory.component' } },
{ path: 'doughnut', component: DoughnutComponent, data: { name: 'Doughnut', location: 'app/components/chart/doughnut.component' } },
{ path: 'drag', component: DraganddropComponent, data: { name: 'Data Editing', location: 'app/components/chart/drag.component' } },
{ path: 'drilldown', component: DrilldownComponent, data: { name: 'Drilldown', location: 'app/components/chart/drilldown.component' } },
{ path: 'ema', component: EmaComponent, data: { name: 'EMA', location: 'app/components/chart/ema.component' } },
{ path: 'empty', component: EmptyComponent, data: { name: 'Empty Points', location: 'app/components/chart/empty.component' } },
{ path: 'errorbar', component: ErrorbarComponent, data: { name: 'Error Bar', location: 'app/components/chart/errorbar.component' } },
{ path: 'events', component: EventsComponent, data: { name: 'Events', location: 'app/components/chart/events.component' } },
{ path: 'export', component: ExportComponent, data: { name: 'Export and Print', location: 'app/components/chart/export.component' } },
{ path: 'funnel', component: FunnelComponent, data: { name: 'Funnel', location: 'app/components/chart/funner.component' } },
{ path: 'hilo', component: HiloComponent, data: { name: 'Hilo', location: 'app/components/chart/hilo.component' } },
{ path: 'hiloOpenClose', component: HiloOpenCloseComponent, data: { name: 'Hilo Open Close', location: 'app/components/chart/openClose.component' } },
{ path: 'inversedAxis', component: InversedAxisComponent, data: { name: 'Inversed Axis', location: 'app/components/chart/inversed.component' } },
{ path: 'indexed', component: IndexedComponent, data: { name: 'Indexed Category Axis', location: 'app/components/chart/indexd.component' } },
{ path: 'label', component: LabelComponent, data: { name: 'Label Template', location: 'app/components/chart/label.component' } },
{ path: 'legend', component: LegendComponent, data: { name: 'Legend Position', location: 'app/components/chart/legend.component' } },
{ path: 'local', component: LocalComponent, data: { name: 'Local Data', location: 'app/components/chart/local.component' } },
{ path: 'localization', component: LocalizationComponent, data: { name: 'Localization', location: 'app/components/chart/localization.component' } },
{ path: 'log', component: LogComponent, data: { name: 'Log Axis', location: 'app/components/chart/log.component' } },
{ path: 'macd', component: MacdComponent, data: { name: 'MACD', location: 'app/components/chart/macd.component' } },
{ path: 'momentum', component: MomentumComponent, data: { name: 'Momentum', location: 'app/components/chart/momentum.component' } },
{ path: 'color', component: ColorComponent, data: { name: 'Multicolor Line', location: 'app/components/chart/color.component' } },
{ path: 'multilevel', component: MultilevelComponent, data: { name: 'Multi-level Labels', location: 'app/components/chart/multilevel.component' } },
{ path: 'multiAxes', component: MultiAxesComponent, data: { name: 'Multiple Axes', location: 'app/components/chart/multiAxes.component' } },
{ path: 'multiPie', component: MultiPieComponent, data: { name: 'multiple Pie', location: 'app/components/chart/multiPie.component' } },
{ path: 'multiSelection', component: MultiSelectionComponent, data: { name: 'Range Selection', location: 'app/components/chart/multiSelection.component' } },
{ path: 'performance', component: PerformanceComponent, data: { name: 'Performance', location: 'app/components/chart/performance.component' } },
{ path: 'pieofpie', component: PieofPieComponent, data: { name: 'Pie of Pie', location: 'app/components/chart/pieofpie.component' } },
{ path: 'radar', component: RadarComponent, data: { name: 'Radar', location: 'app/components/chart/radar.component' } },
{ path: 'rangeArea', component: RangeAreaComponent, data: { name: 'Range Area', location: 'app/components/chart/rangeArea.component' } },
{ path: 'rangeColumn', component: RangeColumnComponent, data: { name: 'Range Column', location: 'app/components/chart/rangeColumn.component' } },
{ path: 'remote', component: RemoteComponent, data: { name: 'Remote Data', location: 'app/components/chart/remote.component' } },
{ path: 'row', component: RowComponent, data: { name: 'Flexible Axis Layout', location: 'app/components/chart/row.component' } },
{ path: 'rsi', component: RsiComponent, data: { name: 'RSI', location: 'app/components/chart/rsi.component' } },
{ path: 'scatter', component: ScatterComponent, data: { name: 'scatter', location: 'app/components/chart/scatter.component' } },
{ path: 'selection', component: SelectionComponent, data: { name: 'Selection API', location: 'app/components/chart/selection.component' } },
{ path: 'semiPie', component: SemiPieComponent, data: { name: 'Semi Pie and Doughnut', location: 'app/components/chart/semiPie.component' } },
{ path: 'sma', component: SmaComponent, data: { name: 'SMA', location: 'app/components/chart/sma.component' } },
{ path: 'smartAxis', component: SmartAxisComponent, data: { name: 'Smart Axis Labels', location: 'app/components/chart/smartAxis.component' } },
{ path: 'smartLabel', component: SmartLabelComponent, data: { name: 'Smart Labels', location: 'app/components/chart/smartLabel.component' } },
{ path: 'spline', component: SplineComponent, data: { name: 'Spline', location: 'app/components/chart/spline.component' } },
{ path: 'splineArea', component: SplineAreaComponent, data: { name: 'Spline Area', location: 'app/components/chart/splineArea.component' } },
{ path: 'stackingArea', component: StackingAreaComponent, data: { name: 'Stacked Area', location: 'app/components/chart/stackingArea.component' } },
{ path: 'stackingArea100', component: StackingArea100Component, data: { name: 'stacked Area 100', location: 'app/components/chart/stackingArea100.component' } },
{ path: 'stackingBar', component: StackingBarComponent, data: { name: 'Stacked Bar', location: 'app/components/chart/stackingBar.component' } },
{ path: 'stackingBar100', component: StackingBar100Component, data: { name: 'Stacked Bar 100', location: 'app/components/chart/stackingBar100.component' } },
{ path: 'stackingColumn', component: ColumnStackComponent, data: { name: 'Stacked Column', location: 'app/components/chart/stackingColumn.component' } },
{ path: 'stackingColumn100', component: ColumnStack100Component, data: { name: 'Stacked Column 100', location: 'app/components/chart/stackingColumn100.component' } },
{ path: 'stepArea', component: StepAreaComponent, data: { name: 'Step Area', location: 'app/components/chart/stepArea.component' } },
{ path: 'stepLine', component: StepLineComponent, data: { name: 'Step Line', location: 'app/components/chart/stepLine.component' } },
{ path: 'stochastic', component: StochasticComponent, data: { name: 'Stochastic', location: 'app/components/chart/stochastic.component' } },
{ path: 'stripline', component: StriplineComponent, data: { name: 'Strip lines', location: 'app/components/chart/stripline.component' } },
{ path: 'subtitle', component: SubtitleComponent, data: { name: 'Subtitle', location: 'app/components/chart/subtitle.component' } },
{ path: 'symbol', component: SymbolComponent, data: { name: 'Symbol', location: 'app/components/chart/symbol.component' } },
{ path: 'title', component: TitleComponent, data: { name: 'Title', location: 'app/components/chart/title.component' } },
{ path: 'tma', component: TmaComponent, data: { name: 'TMA', location: 'app/components/chart/title.component' } },
{ path: 'tooltip', component: TooltipComponent, data: { name: 'Tooltip Template', location: 'app/components/chart/tooltip.component' } },
{ path: 'trackball', component: TrackballComponent, data: { name: 'Trackball', location: 'app/components/chart/trackball.component' } },
{ path: 'trendline', component: TrendlineComponent, data: { name: 'Trendline', location: 'app/components/chart/trendline.component' } },
{ path: 'vertical', component: VerticalComponent, data: { name: 'Vertical Chart', location: 'app/components/chart/vertical.component' } },
{ path: 'virtual', component: VirtualComponent, data: { name: 'Lazy Loading', location: 'app/components/chart/virtual.component' } },
{ path: 'water', component: WaterfallComponent, data: { name: 'Waterfall', location: 'app/components/chart/water.component' } },
{ path: 'wind', component: WindroseComponent, data: { name: 'Windrose', location: 'app/components/chart/wind.component' } },
{ path: 'box', component: BoxComponent, data: { name: 'Box And Whisker', location: 'app/components/chart/box.component' } },
    { path: '', redirectTo : 'default' }
];

export const ChartRouting = RouterModule.forChild(chartAppRoutes);

@NgModule({
imports: [ChartRouting, SharedModule],
declarations: [DefaultComponent,
ColumnComponent,
PieComponent,
BarComponent,
PolarComponent,
Column3DComponent,
Pie3DComponent,
PyramidComponent,
CombinationComponent,
ZoomingComponent,
BubbleComponent,
CandleComponent,
LiveComponent,
Bar3DComponent,
Doughnut3DComponent,
StackingColumn3dComponent,
StackingColumn3d100Component,
AccumulationComponent,
AlternategridbandComponent,
AnimationComponent,
AnnotationComponent,
AreaComponent,
AtrComponent,
AxisCrossingComponent,
BollingerbandComponent,
CrosshairComponent,
DatetimeComponent,
DatetimeCategoryComponent,
DoughnutComponent,
DraganddropComponent,
DrilldownComponent,
EmaComponent,
EmptyComponent,
ErrorbarComponent,
EventsComponent,
ExportComponent,
FunnelComponent,
HiloComponent,
HiloOpenCloseComponent,
InversedAxisComponent,
IndexedComponent,
LabelComponent,
LegendComponent,
LocalComponent,
LocalizationComponent,
LogComponent,
MacdComponent,
MomentumComponent,
ColorComponent,
MultilevelComponent,
MultiAxesComponent,
MultiPieComponent,
MultiSelectionComponent,
PerformanceComponent,
RadarComponent,
RangeAreaComponent,
RangeColumnComponent,
RemoteComponent,
RowComponent,
RsiComponent,
ScatterComponent,
SelectionComponent,
SemiPieComponent,
SmaComponent,
SmartAxisComponent,
SmartLabelComponent,
SplineComponent,
SplineAreaComponent,
StackingAreaComponent,
StackingArea100Component,
StackingBarComponent,
StackingBar100Component,
ColumnStackComponent,
ColumnStack100Component,
StepAreaComponent,
StepLineComponent,
StochasticComponent,
StriplineComponent,
SubtitleComponent,
SymbolComponent,
TitleComponent,
TmaComponent,
TooltipComponent,
TrackballComponent,
TrendlineComponent,
VerticalComponent,
VirtualComponent,
WaterfallComponent,
WindroseComponent,
BoxComponent,
PieofPieComponent
]
})
export class ChartModule {
}
