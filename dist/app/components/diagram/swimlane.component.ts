import {Component} from '@angular/core';


@Component({
  selector: 'ej-app',
  templateUrl: './swimlane.component.html',
})

export class SwimlaneComponent {
    nodes: Array<any>;
    connectors: Array<any>;
    palettes: Array<any>;
    showPaletteItemText: boolean;
    pageSettings: Object;
    snapSettings: Object;
    constructor() {
        this.palettes = [
            {
                'name': 'Flow Shapes', 'expanded': true,
                'items': [
                    {
                        'name': 'Rectangle', 'height': 45, 'width': 70, 'offsetX': 70 / 2, 'offsetY': 45 / 2,
                        'fillColor': 'white', 'borderWidth': 1.5, 'type': 'basic', 'shape': 'rectangle'
                    },
                    {
                        'name': 'Ellipse', 'width': 70, 'height': 70, 'offsetX': 20, 'offsetY': 20, 'fillColor': 'white',
                        'borderWidth': 1.5, 'type': 'basic', 'shape': 'ellipse'
                    },
                    {
                        'name': 'Parallelogram', 'width': 70, 'height': 70, 'offsetX': 20, 'offsetY': 30,
                        'fillColor': 'white', 'borderWidth': 1.8, 'shape': 'polygon',
                        'points': [{ x: 25, y: 1 }, { x: 99, y: 1 }, { x: 75, y: 99 }, { x: 1, y: 99 }]
                    },
                    {
                        'name': 'Dimond', 'width': 70, 'height': 70, 'offsetX': 20, 'offsetY': 20,
                        'fillColor': 'white', 'borderWidth': 1.8, 'shape': 'polygon',
                        'points': [{ x: 50, y: 1 }, { x: 100, y: 50 }, { x: 50, y: 100 }, { x: 1, y: 50 }]
                    }
                ]
            },
            {
                'name': 'Swimlane Shapes', 'expanded': true,
                'items': [
                    {
                        'name': 'stackCanvas1', 'header': { 'width': 50, 'height': 50, 'fillColor': '#C7D4DF', 'fontSize': 11 }, 'height': 60, 'width': 140,
                        'fillColor': '#f5f5f5', 'offsetX': 70, 'offsetY': 30, 'orientation': 'horizontal', 'isLane': true
                    },
                    {
                        'name': 'stackCanvas2', 'header': { 'width': 50, 'height': 50, 'fillColor': '#C7D4DF', 'fontSize': 11 }, 'height': 140, 'width': 60,
                        'fillColor': '#f5f5f5', 'offsetX': 30, 'offsetY': 70, 'orientation': 'vertical', 'isLane': true
                    },
                    {
                        'name': 'verticalPhase', 'type': 'phase', 'lineWidth': 1, 'lineDashArray': '3,3',
                        'lineColor': '#A9A9A9', 'parent': '', 'orientation': 'vertical', 'label': { 'text': '' }
                    },
                    {
                        'name': 'horizontalPhase', 'type': 'phase', 'lineWidth': 1, 'lineDashArray': '3,3',
                        'lineColor': '#A9A9A9', 'parent': '', 'orientation': 'horizontal', 'label': { 'text': '' }
                    },
                ]
            },
            {
                'name': 'Connectors', 'expanded': true,
                'items': [
                    {
                        'name': 'Link1', 'segments': [{ 'type': 'orthogonal' }], 'sourcePoint': { x: 0, y: 0 },
                        'targetPoint': { x: 40, y: 40 },
                        'targetDecorator': { 'shape': 'arrow', 'borderColor': '#A9A9A9', 'fillColor': '#A9A9A9' },
                        'lineWidth': 2, 'lineColor': '#A9A9A9'
                    },
                    {
                        'name': 'Link21', 'segments': [{ 'type': 'straight' }], 'sourcePoint': { x: 0, y: 0 },
                        'targetPoint': { x: 40, y: 40 },
                        'targetDecorator': { 'shape': 'arrow', 'borderColor': '#A9A9A9', 'fillColor': '#A9A9A9' },
                        'lineWidth': 2, 'lineColor': '#A9A9A9'
                    },
                ],
            }
        ];
        this.nodes = [
            {
                'type': 'swimlane', 'name': 'swimlane',
                'header': {'text': 'ONLINE PURCHASE STATUS', 'height': 50, 'fillColor': '#C7D4DF', 'fontSize': 11 },
                'fillColor': '#f5f5f5', 'orientation': 'horizontal', 'offsetX': 350, 'offsetY': 290, 'height': 100, 'width': 650,
                'lanes': [
                    {
                        'name': 'stackCanvas1', 'header': { 'text': 'CUSTOMER', 'width': 50, 'fillColor': '#C7D4DF', 'fontSize': 11 },
                        'fillColor': '#f5f5f5', 'height': 120,
                        'children': [
                            {
                                'shape': 'path', 'pathData': 'M 120 24.9999 C 120 38.8072 109.642 50 96.8653 50 L 23.135' +
                                ' 50 C 10.3578 50 0 38.8072 0 24.9999 L 0 24.9999 C' +
                                '0 11.1928 10.3578 0 23.135 0 L 96.8653 0 C 109.642 0 120 11.1928 120 24.9999 Z',
                                'name': 'Order', 'width': 100, 'height': 40,
                                'labels': [
                                    { 'text': 'ORDER', 'fontSize': 11 }
                                ],
                                'marginLeft': 60, 'marginTop': 20,
                            }
                        ]
                    },
                    {
                        'name': 'stackCanvas2', 'header': { 'text': 'ONLINE', 'width': 50, 'fillColor': '#C7D4DF', 'fontSize': 11 },
                        'fillColor': '#f5f5f5', 'height': 120,
                        'children': [
                            {
                                'name': 'selectItemaddcart', 'width': 100, 'height': 40,
                                'labels': [
                                    { 'text': 'Select item\nAdd cart' }
                                ],
                                'marginLeft': 190, 'marginTop': 20
                            },
                            {
                                'name': 'paymentondebitcreditcard',
                                'labels': [
                                    { 'text': 'Payment on\nDebit/Credit Card' }
                                ],
                                'width': 100, 'height': 40, 'marginLeft': 350, 'marginTop': 20
                            }
                        ],
                    },
                    {
                        'name': 'stackCanvas3', 'header': { 'text': 'SHOP', 'width': 50, 'fillColor': '#C7D4DF', 'fontSize': 11 },
                        'fillColor': '#f5f5f5', 'height': 120,
                        'children': [
                            {
                                'name': 'getmaildetailaboutorder', 'width': 100, 'height': 40,
                                'labels': [
                                    { 'text': 'Get mail detail\nabout order' }
                                ],
                                'marginLeft': 190, 'marginTop': 20,
                            },
                            {
                                'name': 'pakingitem', 'width': 100,
                                'height': 40,
                                'labels': [
                                    { 'text': 'Paking item' }
                                ],
                                'marginLeft': 350, 'marginTop': 20
                            }
                        ]
                    },
                    {
                        'name': 'stackCanvas4', 'header': { 'text': 'DELIVERY', 'width': 50, 'fillColor': '#C7D4DF', 'fontSize': 11 },
                        'fillColor': '#f5f5f5', 'height': 120,
                        'children': [
                            {
                                'name': 'sendcourieraboutaddress', 'width': 100, 'height': 40,
                                'labels': [
                                    { 'text': 'Send Courier\n about Address' }
                                ],
                                'marginLeft': 190, 'marginTop': 20
                            },
                            {
                                'name': 'deliveryonthataddress', 'width': 100, 'height': 40,
                                'labels': [
                                    { 'text': 'Delivery on that\n Address' }
                                ],
                                'marginLeft': 350, 'marginTop': 20
                            },
                            {
                                'name': 'getitItem',  'width': 100, 'height': 40, 'shape': 'path',
                                'pathData': 'M 120 24.9999 C 120 38.8072 109.642 50 96.8653 50 L 23.135' +
                                ' 50 C 10.3578 50 0 38.8072 0 24.9999 L 0 24.9999 C' +
                                '0 11.1928 10.3578 0 23.135 0 L 96.8653 0 C 109.642 0 120 11.1928 120 24.9999 Z',
                                'labels': [
                                    { 'text': 'GET IT ITEM', 'fontSize': 11 }
                                ],
                                'marginLeft': 500, 'marginTop': 20,
                            }
                        ]
                    }
                ],
                'phases': [
                    { 'name': 'phase1', 'offset': 200, 'lineWidth': 1, 'lineDashArray': '3,3', 'lineColor': '#606060', 'label': { 'text': 'Phase' }},
                    { 'name': 'phase2', 'offset': 500, 'lineWidth': 1, 'lineDashArray': '3,3', 'lineColor': '#606060', 'label': { 'text': 'Phase' }},
                ],
                'phaseSize': 20,
              }
        ];
        this.connectors = [
            {
                'name': 'connector1', 'sourceNode': 'Order', 'targetNode': 'selectItemaddcart', 'targetDecorator': {
                'shape': 'arrow', 'borderColor': '#606060', 'width': '10', 'height': '10'}, 'lineColor': '#606060',
                'segments': [{ 'type': 'orthogonal', 'length': null }]
            },
            {
                'name': 'connector2', 'sourceNode': 'selectItemaddcart', 'targetNode': 'paymentondebitcreditcard', 'targetDecorator': {
                'shape': 'arrow', 'borderColor': '#606060', 'width': '10', 'height': '10' }, 'lineColor': '#606060',
                'segments': [{ 'type': 'orthogonal', 'length': null }]
            },
            {
                'name': 'connector3', 'sourceNode': 'paymentondebitcreditcard', 'targetNode': 'getmaildetailaboutorder', 'targetDecorator': {
                'shape': 'arrow', 'borderColor': '#606060', 'width': '10', 'height': '10' }, 'lineColor': '#606060',
                'segments': [{ 'type': 'orthogonal', 'length': null }]
            },
            {
                'name': 'connector4', 'sourceNode': 'getmaildetailaboutorder', 'targetNode': 'pakingitem', 'targetDecorator': {
                'shape': 'arrow', 'borderColor': '#606060', 'width': '10', 'height': '10' }, 'lineColor': '#606060',
                'segments': [{ 'type': 'orthogonal', 'length': null }]
            },
            {
                'name': 'connector5', 'sourceNode': 'pakingitem', 'targetNode': 'sendcourieraboutaddress', 'targetDecorator': {
                'shape': 'arrow', 'borderColor': '#606060', 'width': '10', 'height': '10' }, 'lineColor': '#606060',
                'segments': [{ 'type': 'orthogonal', 'length': null }]
            },
            {
                'name': 'connector6', 'sourceNode': 'sendcourieraboutaddress', 'targetNode': 'deliveryonthataddress', 'targetDecorator': {
                'shape': 'arrow', 'borderColor': '#606060', 'width': '10', 'height': '10' }, 'lineColor': '#606060',
                'segments': [{ 'type': 'orthogonal', 'length': null }]
            },
            {
                'name': 'connector7', 'sourceNode': 'deliveryonthataddress', 'targetNode': 'getitItem', 'targetDecorator': {
                'shape': 'arrow', 'borderColor': '#606060', 'width': '10', 'height': '10' }, 'lineColor': '#606060',
                'segments': [{ 'type': 'orthogonal', 'length': null }]
            },
        ];
        this.pageSettings = {
            scrollLimit: 'diagram'
        };
        this.showPaletteItemText = false;
        this.snapSettings = { snapConstraints: 'none' };
    }
}

