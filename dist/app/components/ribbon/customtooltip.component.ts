import { Component } from '@angular/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
    selector: 'ej-app',
    templateUrl: './customtooltip.component.html',
    providers: [NorthwindService]
})
export class CustomTooltipComponent {
    constructor(public northwindService: NorthwindService) { }
    groups1 = [{
        text: 'New', alignType: 'rows',
        content: [{
            groups: [{
                id: 'new', text: 'New',
                customToolTip: {
                    title: 'New',
                    content: '<h6>Create new page.</h6>'
                },
                buttonSettings: { contentType: 'imageonly', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-new' }
            }],
            defaults: { type: 'button', width: '50', height: '70', isBig: 'true' }
        }]
    },
        {
            text: 'Clipboard', alignType: 'columns', enableGroupExpander: 'true',
            content: [{
                groups: [{
                    id: 'paste', text: 'Paste',
                    customToolTip: {
                        title: 'Clipboard',
                        content: '<h6>Show a popup for the Clipboard group.</h6>'
                    },
                    buttonSettings: { contentType: 'imageonly', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-ribbonpaste' }
                }],
                defaults: { type: 'button', width: '50', height: '70', isBig: 'true' }
            },
                {
                    groups: [{
                        id: 'cut', text: 'Cut',
                        customToolTip: {
                            title: 'Cut',
                            content: '<h6>Cut the content.</h6>'
                        },
                        buttonSettings: { contentType: 'textandimage', prefixIcon: 'e-ribbon e-icon e-ribboncut' }
                    },
                        {
                            id: 'clear', text: 'Clear',
                            customToolTip: {
                                title: 'Clear',
                                content: '<h6>Clear the content.</h6>'
                            },
                            buttonSettings: { contentType: 'textandimage', prefixIcon: 'e-ribbon e-icon clearAll' }
                        },
                        {
                            id: 'copy', text: 'Copy',
                            customToolTip: {
                                title: 'Copy',
                                content: '<h6>Copy the content.</h6>'
                            },
                            buttonSettings: { contentType: 'textandimage', prefixIcon: 'e-ribbon e-icon e-ribboncopy' }
                        }],
                    defaults: { type: 'button', width: '60', height: '25', isBig: 'false' }
                }]
        },
        {
            text: 'Font', alignType: 'rows',
            content: [{
                groups: [{
                        id: 'bold', type: 'togglebutton',
                        customToolTip: {
                            title: 'Bold',
                            content: '<h6>Bold the content.</h6>'
                        },
                        toggleButtonSettings: { contentType: 'imageonly', defaultText: 'Bold', activeText: 'Bold', defaultPrefixIcon: 'e-ribbon e-icon bold', activePrefixIcon: 'e-ribbon e-icon bold' }
                    }, {
                        id: 'italic', type: 'togglebutton',
                        customToolTip: {
                            title: 'Italic',
                            content: '<h6>Italic the content.</h6>'
                        },
                        toggleButtonSettings: {
                            contentType: 'imageonly',
                            defaultText: 'Italic',
                            activeText: 'Italic',
                            defaultPrefixIcon: 'e-ribbon e-icon e-ribbonitalic',
                            activePrefixIcon: 'e-ribbon e-icon e-ribbonitalic'
                        }
                    },
                    {
                        id: 'underline', type: 'togglebutton',
                        customToolTip: {
                            title: 'Underline',
                            content: '<h6>Underline the content.</h6>'
                        },
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
                    id: 'undo', text: 'Undo',
                    customToolTip: {
                        title: 'Undo',
                        content: '<h6>Undo.</h6>'
                    },
                    buttonSettings: { contentType: 'textandimage', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-undo' }
                }, {
                        id: 'redo', text: 'Redo',
                        customToolTip: {
                            title: 'Redo',
                            content: '<h6>Redo.</h6>'
                        },
                        buttonSettings: { contentType: 'textandimage', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-redo' }
                    }],
                defaults: { type: 'button', width: '40', height: '70', isBig: 'true' }
            }]
        }, {
            text: 'View', alignType: 'rows',
            content: [{
                groups: [{
                    id: 'zoomin', text: 'Zoom In',
                    customToolTip: {
                        title: 'ZoomIn',
                        content: '<h6>Zoom In.</h6>'
                    },
                    buttonSettings: { contentType: 'textandimage', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-zoomin' }
                }, {
                        id: 'zoomout', text: 'Zoom Out',
                        customToolTip: {
                            title: 'ZoomOut',
                            content: '<h6>Zoom Out.</h6>'
                        },
                        buttonSettings: { contentType: 'textandimage', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-zoomout' }
                    },
                    {
                        id: 'fullscreen', text: 'Full Screen',
                        customToolTip: {
                            title: 'FullScreen',
                            content: '<h6>Full Screen.</h6>'
                        },
                        buttonSettings: { contentType: 'textandimage', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-fullscreen' }
                    }],
                defaults: { type: 'button', width: '73', height: '70', isBig: 'true' }
            }]
        }];
    insert = [{
        text: 'Tables', alignType: 'columns',
        content: [{
            groups: [{
                id: 'tables', text: 'Tables',
                customToolTip: {
                    title: 'Tables',
                    content: '<h6>Tables.</h6>'
                },
                buttonSettings: { contentType: 'textandimage', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-table' }
            }],
            defaults: { type: 'button', width: 50, height: 70 }
        }]
    },
        {
            text: 'Illustrations', alignType: 'rows',
            content: [{
                groups: [{
                    id: 'pictures', text: 'Pictures',
                    customToolTip: {
                        title: 'Pictures',
                        content: '<h6>Pictures.</h6>'
                    },
                    buttonSettings: { contentType: 'textandimage', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-picture' }
                }, {
                        id: 'videos', text: 'Videos',
                        customToolTip: {
                            title: 'Videos',
                            content: '<h6>Videos.</h6>'
                        },
                        buttonSettings: { contentType: 'textandimage', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-video' }
                    },
                    {
                        id: 'shapes', text: 'Shapes',
                        customToolTip: {
                            title: 'Shapes',
                            content: '<h6>Shapes.</h6>'
                        },
                        buttonSettings: { contentType: 'textandimage', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-shape' }
                    }, {
                        id: 'chart', text: 'Charts',
                        customToolTip: {
                            title: 'Charts',
                            content: '<h6>Charts.</h6>'
                        },
                        buttonSettings: { contentType: 'textandimage', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-chart' }
                    }],
                defaults: { type: 'button', width: 50, height: 70 }
            }]
        }, {
            text: 'Comments', alignType: 'columns',
            content: [{
                groups: [{
                    id: 'comment', text: 'Comments',
                    customToolTip: {
                        title: 'Comments',
                        content: '<h6>Comments.</h6>'
                    },
                    buttonSettings: { contentType: 'textandimage', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-comment' }
                }],
                defaults: { type: 'button', width: 70, height: 70 }
            }]
        }, {
            text: 'Hyperlink', alignType: 'columns',
            content: [{
                groups: [{
                    id: 'hyperlink', text: 'Hyperlink',
                    customToolTip: {
                        title: 'Hyperlink',
                        content: '<h6>Hyperlink.</h6>'
                    },
                    buttonSettings: { contentType: 'textandimage', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-hyperlink' }
                }],
                defaults: { type: 'button', width: 70, height: 70 }
            }]
        }, {
            text: 'Equation', alignType: 'columns',
            content: [{
                groups: [{
                    id: 'equation', text: 'Equation',
                    customToolTip: {
                        title: 'Equation',
                        content: '<h6>Equation.</h6>'
                    },
                    buttonSettings: { contentType: 'textandimage', imagePosition: 'imagetop', prefixIcon: 'e-ribbon e-icon e-equation' }
                }],
                defaults: { type: 'button', width: 70, height: 70 }
            }]
        }];
}
