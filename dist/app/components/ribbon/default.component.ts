import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
    selector: 'ej-app',
    templateUrl: './default.component.html',
    providers: [NorthwindService]
})
export class DefaultComponent {
    constructor(public northwindService: NorthwindService) { }
    defaults = { type: 'button', width: '60', height: '70' };
    buttonSettings = { contentType: 'imageonly', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-new' };
    groups1 = [{
        text: 'New', alignType: 'rows',
        content: [{
            groups: [{
                id: 'new', text: 'New', toolTip: 'New',
                buttonSettings: { contentType: 'imageonly', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-new' }
            }],
            defaults: { type: 'button', width: '50', height: '70', isBig: 'true' }
        }]
    },
        {
            text: 'Clipboard', alignType: 'columns', enableGroupExpander: 'true',
            content: [{
                groups: [{
                    id: 'paste', text: 'Paste', toolTip: 'Paste',
                    buttonSettings: { contentType: 'imageonly', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-ribbonpaste' }
                }],
                defaults: { type: 'button', width: '50', height: '70', isBig: 'true' }
            },
                {
                    groups: [{
                        id: 'cut', text: 'Cut', toolTip: 'Cut',
                        buttonSettings: { contentType: 'textandimage', prefixIcon: 'e-ribbon e-icon e-ribboncut' }
                    },
                        {
                            id: 'clear', text: 'Clear', toolTip: 'Clear All',
                            buttonSettings: { contentType: 'textandimage', prefixIcon: 'e-ribbon e-icon clearAll' }
                        },
                        {
                            id: 'copy', text: 'Copy', toolTip: 'Copy',
                            buttonSettings: { contentType: 'textandimage', prefixIcon: 'e-ribbon e-icon e-ribboncopy' }
                        }],
                    defaults: { type: 'button', width: '60', height: '25', isBig: 'false' }
                }]
        },
        {
            text: 'Font', alignType: 'rows',
            content: [{
                groups: [{
                    id: 'bold', toolTip: 'Bold', type: 'togglebutton',
                    toggleButtonSettings: { contentType: 'imageonly', defaultText: 'Bold', activeText: 'Bold', defaultPrefixIcon: 'e-ribbon e-icon bold', activePrefixIcon: 'e-ribbon e-icon bold' }
                }, {
                        id: 'italic', toolTip: 'Italic', type: 'togglebutton',
                        toggleButtonSettings: {
                            contentType: 'imageonly',
                            defaultText: 'Italic',
                            activeText: 'Italic',
                            defaultPrefixIcon: 'e-ribbon e-icon e-ribbonitalic',
                            activePrefixIcon: 'e-ribbon e-icon e-ribbonitalic'
                        }
                    },
                    {
                        id: 'underline', toolTip: 'Underline', type: 'togglebutton',
                        toggleButtonSettings: {
                            contentType: 'imageonly',
                            defaultText: 'Underline',
                            activeText: 'Underline',
                            defaultPrefixIcon: 'e-ribbon e-icon e-ribbonunderline',
                            activePrefixIcon: 'e-ribbon e-icon e-ribbonunderline'
                        }
                    }]
            }]
        },
        {
            text: 'Actions', alignType: 'rows',
            content: [{
                groups: [{
                    id: 'undo', text: 'Undo', toolTip: 'Undo',
                    buttonSettings: { contentType: 'textandimage', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-undo' }
                }, {
                        id: 'redo', text: 'Redo', toolTip: 'Redo',
                        buttonSettings: { contentType: 'textandimage', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-redo' }
                    }],
                defaults: { type: 'button', width: '40', height: '70', isBig: 'true' }
            }]
        }, {
            text: 'View', alignType: 'rows',
            content: [{
                groups: [{
                    id: 'zoomin', text: 'Zoom In', toolTip: 'Zoom In',
                    buttonSettings: { contentType: 'textandimage', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-zoomin' }
                }, {
                        id: 'zoomout', text: 'Zoom Out', toolTip: 'Zoom Out',
                        buttonSettings: { contentType: 'textandimage', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-zoomout' }
                    },
                    {
                        id: 'fullscreen', text: 'Full Screen', toolTip: 'Full Screen',
                        buttonSettings: { contentType: 'textandimage', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-fullscreen' }
                    }],
                defaults: { type: 'button', width: '73', height: '70', isBig: 'true' }
            }]
        }];
    insert = [{
        text: 'Tables', alignType: 'columns',
        content: [{
            groups: [{
                id: 'tables', text: 'Tables', toolTip: 'Tables',
                buttonSettings: { contentType: 'textandimage', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-table' }
            }],
            defaults: { type: 'button', width: 50, height: 70 }
        }]
    },
        {
            text: 'Illustrations', alignType: 'rows',
            content: [{
                groups: [{
                    id: 'pictures', text: 'Pictures', toolTip: 'Pictures',
                    buttonSettings: { contentType: 'textandimage', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-picture' }
                }, {
                        id: 'videos', text: 'Videos', toolTip: 'Videos',
                        buttonSettings: { contentType: 'textandimage', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-video' }
                    },
                    {
                        id: 'shapes', text: 'Shapes', toolTip: 'Shapes',
                        buttonSettings: { contentType: 'textandimage', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-shape' }
                    }, {
                        id: 'chart', text: 'Charts', toolTip: 'Charts',
                        buttonSettings: { contentType: 'textandimage', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-chart' }
                    }],
                defaults: { type: 'button', width: 50, height: 70 }
            }]
        }, {
            text: 'Comments', alignType: 'columns',
            content: [{
                groups: [{
                    id: 'comment', text: 'Comments', toolTip: 'Comments',
                    buttonSettings: { contentType: 'textandimage', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-comment' }
                }],
                defaults: { type: 'button', width: 70, height: 70 }
            }]
        }, {
            text: 'Hyperlink', alignType: 'columns',
            content: [{
                groups: [{
                    id: 'hyperlink', text: 'Hyperlink', toolTip: 'Hyperlink',
                    buttonSettings: { contentType: 'textandimage', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-hyperlink' }
                }],
                defaults: { type: 'button', width: 70, height: 70 }
            }]
        }, {
            text: 'Equation', alignType: 'columns',
            content: [{
                groups: [{
                    id: 'equation', text: 'Equation', toolTip: 'Equation',
                    buttonSettings: { contentType: 'textandimage', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-equation' }
                }],
                defaults: { type: 'button', width: 70, height: 70 }
            }]
        }];
}
