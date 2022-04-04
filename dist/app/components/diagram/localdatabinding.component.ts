import { Component } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './localdatabinding.component.html',
})

export class LocalDataBindingComponent {
    dataSourceSettings: Object;
    defaultSettings: Object;
    layout: Object;
    pageSettings: Object;
    snapSettings: Object;
    nodeTemplate: Function;
    tools: Object;
    enableContextMenu: boolean;
    constructor() {
        let data = [
            { 'Id': 'parent', 'Role': 'Marketing Director', 'Color': '#f79663' },
            { 'Id': '1', 'Role': 'Manager', 'TeamLead': 'parent', 'Color': '#f79663' },
            { 'Id': '3', 'Role': 'Fundraiser', 'TeamLead': '1', 'Color': '#5cc3b5' },
            { 'Id': '4', 'Role': 'Programmer', 'TeamLead': '1', 'Color': '#5cc3b5' },
            { 'Id': '6', 'Role': 'Communicator', 'TeamLead': '3', 'Color': '#67a961' },
            { 'Id': '7', 'Role': 'Advertisor', 'TeamLead': '3', 'Color': '#67a961' },
            { 'Id': '8', 'Role': 'Funding Officer', 'TeamLead': '3', 'Color': '#67a961' },
            { 'Id': '9', 'Role': 'Inter', 'TeamLead': '6', 'Color': '#67a961' },
            { 'Id': '10', 'Role': 'Officer', 'TeamLead': '7', 'Color': '#67a961' },
            { 'Id': '11', 'Role': 'Officer', 'TeamLead': '7', 'Color': '#67a961' },
            { 'Id': '12', 'Role': 'Asst.Director', 'TeamLead': '4', 'Color': '#e9b833' },
            { 'Id': '13', 'Role': 'Asst.Director', 'TeamLead': '4', 'Color': '#e9b833' },
            { 'Id': '14', 'Role': 'Asst.Director', 'TeamLead': '4', 'Color': '#e9b833' }
        ];
        this.dataSourceSettings = { id: 'Id', parent: 'TeamLead', dataSource: data };
        this.defaultSettings = {
            node: {
                width: 110, height: 40, shape: 'rectangle', borderColor: 'transparent', fillColor: '#253737',
                labels: [{ name: 'label1', fontColor: '#ffffff', margin: { left: 5, right: 5 } }]
            },
            connector: { segments: [{ 'type': 'orthogonal' }], targetDecorator: { fillColor: '#4F4F4F', borderColor: '#4F4F4F' }, lineColor: '#003D3D' }
        };
        this.layout = { type: 'hierarchicaltree', marginX: 50, marginY: 50, horizontalSpacing: 30, verticalSpacing: 40 };
        this.nodeTemplate = function (diagram, node) {
            node.labels[0].text = node.Role;
            node.fillColor = node.Color;
        };
        this.pageSettings = {
            scrollLimit: 'diagram'
        };
        this.snapSettings = { snapConstraints: 'none' };
        this.tools = ej.datavisualization.Diagram.Tool.ZoomPan;
        this.enableContextMenu = false;
    }
}
