import { Component } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './hierarchicallayout.component.html',
})
export class HierarchicalLayoutComponent {
   dataSourceSettings: Object;
    defaultSettings: Object;
    layout: Object;
    pageSettings: Object;
    snapSettings: Object;
    tool: Object;
    nodeTemplate: Object;
    constructor() {
        let data = [
            { 'Name': 'Diagram', 'fillColor': '#916DAF' },
            { 'Name': 'Layout', 'Category': 'Diagram' },
            { 'Name': 'Tree Layout', 'Category': 'Layout' },
            { 'Name': 'Organizational Chart', 'Category': 'Layout' },
            { 'Name': 'Hierarchical Tree', 'Category': 'Tree Layout' },
            { 'Name': 'Radial Tree', 'Category': 'Tree Layout' },
            { 'Name': 'Mind Map', 'Category': 'Hierarchical Tree' },
            { 'Name': 'Family Tree', 'Category': 'Hierarchical Tree' },
            { 'Name': 'Management', 'Category': 'Organizational Chart' },
            { 'Name': 'Human Resource', 'Category': 'Management' },
            { 'Name': 'University', 'Category': 'Management' },
            { 'Name': 'Business', 'Category': 'Management' },
        ];
        this.defaultSettings = {
            node: {
                width: 100, height: 40, borderColor: 'black', borderWidth: 1, fillColor: '#88C65C',
                labels: [{ name: 'label1', fontColor: 'white', fontSize: 12, margin: { left: 10, right: 10 } }]
            },
            connector: { lineColor: '#000000', segments: [{ 'type': 'orthogonal' }], }
        };
        this.layout = { type: 'hierarchicaltree', horizontalSpacing: 25, verticalSpacing: 35, marginX : 3, marginY: 30, };
        this.tool = ej.datavisualization.Diagram.Tool.SingleSelect;
        this.nodeTemplate = function (diagram, node) {
            node.labels[0].text = node.Name;
        };
        this.dataSourceSettings = { id: 'Name', parent: 'Category', dataSource: data};
        this.snapSettings = { snapConstraints: 'none' };
        this.pageSettings = { scrollLimit: 'diagram'};
    }
}
