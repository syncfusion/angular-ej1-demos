import { Component } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './overview.component.html',
})

export class OverviewComponent {
    pageSettings: Object;
    snapSettings: Object;
    nodes: Array<any>;
    tool: Object;
    enableContextMenu: boolean;
    constructor() {
        let nodes = [];
        createNode(24, 23, 20, '/app/content/images/overviewcontrol/cards_05.png');
        createNode(555, 48, 41, '/app/content/images/overviewcontrol/cards_03.png');
        createNode(461, 174, -64, '/app/content/images/overviewcontrol/cards_07.png');
        createNode(455, 634, 0, '/app/content/images/overviewcontrol/cards_09.png');
        createNode(81, 583, 0, '/app/content/images/overviewcontrol/cards_11.png');
        createNode(861, 449, -24, '/app/content/images/overviewcontrol/cards_14.png');
        createNode(34, 417, 20, '/app/content/images/overviewcontrol/cards_16.png');
        createNode(674, 418, 37, '/app/content/images/overviewcontrol/cards_18.png');
        createNode(1181, 921, -75, '/app/content/images/overviewcontrol/cards_23.png');
        createNode(159, 125, -9, '/app/content/images/overviewcontrol/cards_25.png');
        createNode(776, 249, 0, '/app/content/images/overviewcontrol/cards_100.png');
        createNode(776, 27, 0, '/app/content/images/overviewcontrol/cards_101.png');
        createNode(634, 149, -79, '/app/content/images/overviewcontrol/cards_102.png');
        createNode(287, 159, 0, '/app/content/images/overviewcontrol/cards_103.png');
        createNode(223, 584, -20, '/app/content/images/overviewcontrol/cards_104.png');
        createNode(294, 8, -52, '/app/content/images/overviewcontrol/cards_105.png');
        createNode(388, 296, 59, '/app/content/images/overviewcontrol/cards_106.png');
        createNode(102, 267, 0, '/app/content/images/overviewcontrol/cards_107.png');
        createNode(380, 452, 0, '/app/content/images/overviewcontrol/cards_108.png');
        createNode(683, 550, 31, '/app/content/images/overviewcontrol/cards_109.png');
        createNode(1038, 567, 20, '/app/content/images/overviewcontrol/cards_05.png');
        createNode(849, 115, 41, '/app/content/images/overviewcontrol/cards_03.png');
        createNode(1165, 144, -64, '/app/content/images/overviewcontrol/cards_07.png');
        createNode(497, 815, 0, '/app/content/images/overviewcontrol/cards_09.png');
        createNode(993, 480, 0, '/app/content/images/overviewcontrol/cards_100.png');
        createNode(1240, 582, -38, '/app/content/images/overviewcontrol/cards_101.png');
        createNode(941, 249, 0, '/app/content/images/overviewcontrol/cards_102.png');
        createNode(674, 921, -41, '/app/content/images/overviewcontrol/cards_104.png');
        createNode(296, 816, -20, '/app/content/images/overviewcontrol/cards_104.png');
        createNode(1025, 45, -52, '/app/content/images/overviewcontrol/cards_105.png');
        createNode(962, 943, 59, '/app/content/images/overviewcontrol/cards_106.png');
        createNode(1093, 409, -42, '/app/content/images/overviewcontrol/cards_107.png');
        createNode(445, 939, 33, '/app/content/images/overviewcontrol/cards_108.png');
        createNode(756, 783, 31, '/app/content/images/overviewcontrol/cards_109.png');
        createNode(15, 1047, 0, '/app/content/images/overviewcontrol/cards_05.png');
        createNode(1072, 102, 41, '/app/content/images/overviewcontrol/cards_03.png');
        createNode(417, 1198, -64, '/app/content/images/overviewcontrol/cards_07.png');
        createNode(1148, 815, 0, '/app/content/images/overviewcontrol/cards_09.png');
        createNode(1322, 310, -34, '/app/content/images/overviewcontrol/cards_11.png');
        createNode(833, 1442, -36, '/app/content/images/overviewcontrol/cards_14.png');
        createNode(25, 1441, 31, '/app/content/images/overviewcontrol/cards_16.png');
        createNode(630, 1442, 0, '/app/content/images/overviewcontrol/cards_18.png');
        createNode(1454, 102, 37, '/app/content/images/overviewcontrol/cards_20.png');
        createNode(1253, 1306, -75, '/app/content/images/overviewcontrol/cards_23.png');
        createNode(115, 1148, -9, '/app/content/images/overviewcontrol/cards_25.png');
        createNode(993, 480, 0, '/app/content/images/overviewcontrol/cards_11.png');
        createNode(115, 815, -24, '/app/content/images/overviewcontrol/cards_14.png');
        createNode(913, 676, 31, '/app/content/images/overviewcontrol/cards_16.png');
        createNode(1216, 310, 0, '/app/content/images/overviewcontrol/cards_18.png');
        createNode(590, 614, -16, '/app/content/images/overviewcontrol/cards_20.png');
        createNode(285, 685, -75, '/app/content/images/overviewcontrol/cards_23.png');
        createNode(232, 357, -9, '/app/content/images/overviewcontrol/cards_25.png');
        createNode(733, 1273, 0, '/app/content/images/overviewcontrol/cards_100.png');
        createNode(733, 1051, 0, '/app/content/images/overviewcontrol/cards_101.png');
        createNode(590, 1273, -79, '/app/content/images/overviewcontrol/cards_102.png');
        createNode(244, 1212, 0, '/app/content/images/overviewcontrol/cards_103.png');
        createNode(1547, 9, -20, '/app/content/images/overviewcontrol/cards_104.png');
        createNode(251, 1031, -52, '/app/content/images/overviewcontrol/cards_105.png');
        createNode(344, 1320, 59, '/app/content/images/overviewcontrol/cards_106.png');
        createNode(58, 1291, 0, '/app/content/images/overviewcontrol/cards_107.png');
        createNode(287, 1442, 0, '/app/content/images/overviewcontrol/cards_108.png');
        createNode(1499, 733, 31, '/app/content/images/overviewcontrol/cards_109.png');
        createNode(1566, 726, 20, '/app/content/images/overviewcontrol/cards_05.png');
        createNode(805, 1138, 41, '/app/content/images/overviewcontrol/cards_03.png');
        createNode(1122, 1168, -64, '/app/content/images/overviewcontrol/cards_07.png');
        createNode(1216, 0, 0, '/app/content/images/overviewcontrol/cards_09.png');
        createNode(1326, 534, 0, '/app/content/images/overviewcontrol/cards_11.png');
        createNode(1514, 930, -24, '/app/content/images/overviewcontrol/cards_14.png');
        createNode(1622, 473, 31, '/app/content/images/overviewcontrol/cards_16.png');
        createNode(1498, 1124, 0, '/app/content/images/overviewcontrol/cards_18.png');
        createNode(1668, 228, 0, '/app/content/images/overviewcontrol/cards_20.png');
        function createNode(x, y, angle, src) {
            let width = 102; let height = 142;
            x += 51;
            y += 71;
            nodes.push({
                name: 'node_' + nodes.length,
                offsetX: x, offsetY: y, rotateAngle: angle, width: width, height: height, type: 'image', source: src, borderColor: 'none'
            });
        }
        this.nodes = nodes;
        this.snapSettings = {
            snapConstraints: 'none'
        };
        this.pageSettings = {
            scrollLimit: 'diagram'
        };
        this.tool = ej.datavisualization.Diagram.Tool.ZoomPan;
        this.enableContextMenu = false;
    }
}
