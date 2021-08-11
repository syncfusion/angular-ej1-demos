export class ChartMobileService{
    
    onchartload(sender){

        if (!ej.isNullOrUndefined(window.orientation) && sender) {   	// to modify chart properties for mobile view
        let model = sender.model,
         seriesLength = model.series.length;
         model.title.enableTrim = true;
         model.elementSpacing = 5;
         model.legend.visible = false;
         model.size.height = null;
         model.size.width = null;
         for (let i = 0; i < seriesLength; i++) {
              if (!model.series[i].marker) {
                  model.series[i].marker = {};
              }
            if (!model.series[i].marker.size) {
                  model.series[i].marker.size = {};
            }
              model.series[i].marker.size.width = 6;
              model.series[i].marker.size.height = 6;
         }
         model.primaryXAxis.labelIntersectAction = 'rotate45';
         if (model.primaryXAxis.title) {
              model.primaryXAxis.title.text = '';
         }
         model.primaryXAxis.edgeLabelPlacement = 'hide';
         model.primaryYAxis.labelIntersectAction = 'rotate45';
         if (model.primaryYAxis.title) {
              model.primaryYAxis.title.text = '';
        }
         model.primaryYAxis.edgeLabelPlacement = 'hide';
         if (model.axes) {
              for (let j = 0; j < model.axes.length; j++) {
                  model.axes[j].labelIntersectAction = 'rotate45';
                  if (model.axes[j].title) {
                       model.axes[j].title.text = '';
                  }
                  model.axes[j].edgeLabelPlacement = 'hide';
              }
         }
     }
    }
    onrnload(sender,rangeData){
        sender.model.series = [{
             name: 'Product A',
             type: 'line',
             enableAnimation: false,
             dataSource : rangeData,
             xName: 'XValue',
             yName: 'YValue',
             border: {
                 color: 'transparent',
                 width: '2'
             },
             opcity: 1
           }];
        }
}