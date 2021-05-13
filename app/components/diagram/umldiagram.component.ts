import {Component} from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './umldiagram.component.html',
})

export class UMLDiagramComponent {
    nodes: Array<any>;
    connectors: Array<any>;
    pageSettings: Object;
    enableContextMenu: boolean;
    snapSettings: Object;
    constructor() {
        this.nodes = [
            {
                'name': 'Patient', 'type': 'umlclassifier',
                'class': {
                    'name': 'Patient',
                    'attributes': [
                        { 'name': 'accepted', 'type': 'Date' },
                        { 'name': 'sickness', 'type': 'History' }, { 'name': 'prescription', 'type': 'String[*]' },
                        { 'name': 'allergies', 'type': 'String[*]' }
                    ],
                    'methods': [
                        { 'name': 'getHistory', 'arguments': [{ 'name': 'Date' }], 'type': 'History' }
                    ]
                },
                'fillColor': '#26A0DA', 'borderColor': 'white',
                'offsetX': 85, 'offsetY': 250, 'labels': [{ 'fontColor': 'white'}]
            },
            {
                'name': 'Doctor', 'type': 'umlclassifier',
                'class': {
                    'name': 'Doctor',
                    'attributes': [
                        { 'name': 'specialist', 'type': 'String[*]' },
                        { 'name': 'locations', 'type': 'String[*]' }
                    ]
                },
                'offsetX': 125, 'offsetY': 545, 'fillColor': '#26A0DA', 'borderColor': 'white',
                'labels': [{ 'fontColor': 'white'}]
            },
            {
                'name': 'Person', 'type': 'umlclassifier',
                'class': {
                    'name': 'Person',
                    'attributes': [
                        { 'name': 'name', 'type': 'Name' },
                        { 'name': 'title', 'type': 'String[*]' },
                        { 'name': 'gender', 'type': 'Gender' }
                    ],
                },
                'offsetX': 290, 'offsetY': 105, 'fillColor': '#26A0DA', 'borderColor': 'white',
                'labels': [{ 'fontColor': 'white'}]
            },
            {
                'name': 'Hospital', 'type': 'umlclassifier',
                'class': {
                    'name': 'Hospital',
                    'attributes': [
                        { 'name': 'name', 'type': 'Name' },
                        { 'name': 'address', 'type': 'Address' },
                        { 'name': 'phone', 'type': 'Phone' }
                    ],
                    'methods': [
                        { 'name': 'getDepartment', 'type': 'String' }
                    ]
                },
                'offsetX': 523, 'offsetY': 100, 'fillColor': '#26A0DA', 'borderColor': 'white', 'labels': [{ 'fontColor': 'white'}]
            },
            {
               'name': 'Department', 'type': 'umlclassifier',
               'class': {
                   'name': 'Department',
                   'methods': [
                       { 'name': 'getStaffCount', 'type': 'Int' }
                    ]
                },
                'offsetX': 523, 'offsetY': 280, 'fillColor': '#26A0DA', 'borderColor': 'white',
                'labels': [{ 'fontColor': 'white'}]
            },
            {
                'name': 'Staff', 'type': 'umlclassifier',
                'class': {
                    'name': 'Staff',
                    'attributes': [
                        { 'name': 'joined', 'type': 'Date' },
                        { 'name': 'education', 'type': 'string[*]' },
                        { 'name': 'certification', 'type': 'String[*]' },
                        { 'name': 'languages', 'type': 'String[*]' }
                    ],
                    'methods': [
                        { 'name': 'isDoctor', 'type': 'bool' },
                        { 'name': 'getHistory', 'type': 'bool' }
                    ]
                },
                'offsetX': 520, 'offsetY': 455, 'fillColor': '#26A0DA', 'borderColor': 'white',
                'labels': [{ 'fontColor': 'white' }]
            },
            {
                'name': 'OperationStaff', 'type': 'umlclassifier',
                'class': { 'name': 'OperationStaff' }, 'offsetX': 295, 'offsetY': 455,
                'fillColor': '#26A0DA', 'borderColor': 'white',
                'labels': [{ 'fontColor': 'white'}]
            },
            {
                'name': 'Nurse', 'type': 'umlclassifier', 'class': { 'name': 'Nurse' }, 'offsetX': 295, 'offsetY': 545,
                'fillColor': '#26A0DA', 'borderColor': 'white', 'labels': [{ 'fontColor': 'white'}]
            },
            {
                'name': 'Surgeon', 'type': 'umlclassifier', 'class': { 'name': 'Surgeon' }, 'offsetX': 125, 'offsetY': 665,
                'fillColor': '#26A0DA', 'borderColor': 'white', 'labels' : [{ 'fontColor': 'white'}]
            },
            {
                'name': 'AdministrativeStaff', 'type': 'umlclassifier',
                'class': { 'name': 'AdministrativeStaff' }, 'offsetX': 517, 'offsetY': 605,
                'fillColor': '#26A0DA', 'borderColor': 'white', 'labels': [{ 'fontColor': 'white'}]
            },
            {
                'name': 'FrontDeskStaff', 'type': 'umlclassifier', 'class': { 'name': 'FrontDeskStaff'}, 'offsetX': 515, 'offsetY': 695,
                'fillColor': '#26A0DA', 'borderColor': 'white', 'labels': [{ 'fontColor': 'white'}]
            },
            {
                'name': 'TechnicalStaff', 'type': 'umlclassifier', 'class': { 'name': 'TechnicalStaff' }, 'offsetX': 813, 'offsetY': 445,
                'fillColor': '#26A0DA', 'borderColor': 'white', 'labels': [{ 'fontColor': 'white'}]
            },
            {
                'name': 'Technician', 'type': 'umlclassifier', 'class': { 'name': 'Technician'}, 'offsetX': 700, 'offsetY': 535,
                'fillColor': '#26A0DA', 'borderColor': 'white', 'labels': [{ 'fontColor': 'white'}]
            },
            {
                'name': 'Technologist', 'type': 'umlclassifier', 'class': { 'name': 'Technologist' }, 'offsetX': 900, 'offsetY': 535,
                'fillColor': '#26A0DA', 'borderColor': 'white', 'labels': [{ 'fontColor': 'white'}]
            },
            {
                'name': 'SurgicalTechnologist', 'type': 'umlclassifier', 'class': { 'name': 'SurgicalTechnologist' }, 'offsetX': 900, 'offsetY': 630,
                'fillColor': '#26A0DA', 'borderColor': 'white', 'labels': [{ 'fontColor': 'white'}]
            },
        ];
        this.connectors = [
            {
                'name': 'connect1', 'sourceNode': 'Patient', 'targetNode': 'Person', 'segments': [{ 'type': 'straight'}],
                'shape': { 'type': 'umlclassifier', 'relationship': 'association', 'association': 'default'}
            },
            {
                'name': 'connect2', 'sourceNode': 'Person', 'targetNode': 'Hospital', 'segments': [{ 'type': 'straight' }],
                'shape': { 'type': 'umlclassifier', 'relationship': 'association' }
            },
            {
                'name': 'connect3', 'sourceNode': 'Department', 'targetNode': 'Hospital', 'segments': [{ 'type': 'straight' }],
                'shape': { 'type': 'umlclassifier', 'relationship': 'composition' }
            },
            {
                'name': 'connect4', 'sourceNode': 'OperationStaff', 'targetNode': 'Patient', 'segments': [{ 'type': 'straight' }],
                'shape': { 'type': 'umlclassifier', 'relationship': 'association' }
            },
            {
                'name': 'connect5', 'sourceNode': 'Doctor', 'targetNode': 'OperationStaff', 'segments': [{ 'type': 'straight' }],
                'shape': { 'type': 'umlclassifier', 'relationship': 'association', 'association': 'default'}
            },
            {
                'name': 'connect6', 'sourceNode': 'Nurse', 'targetNode': 'OperationStaff', 'segments': [{ 'type': 'straight' }],
                'shape': { 'type': 'umlclassifier', 'relationship': 'association', 'association': 'default'}
            },
            {
                'name': 'connect7', 'sourceNode': 'Surgeon', 'targetNode': 'Doctor', 'segments': [{ 'type': 'straight' }],
                'shape': { 'type': 'umlclassifier', 'relationship': 'association', 'association': 'default'}
            },
            {
                'name': 'connect8', 'sourceNode': 'FrontDeskStaff', 'targetNode': 'AdministrativeStaff', 'segments': [{ 'type': 'straight' }],
                'shape': { 'type': 'umlclassifier', 'relationship': 'association', 'association': 'default'}
            },
            {
                'name': 'connect9', 'sourceNode': 'Technician', 'targetNode': 'TechnicalStaff', 'segments': [{ 'type': 'straight' }],
                'shape': { 'type': 'umlclassifier', 'relationship': 'association', 'association': 'default'}
            },
            {
                'name': 'connect10', 'sourceNode': 'Technologist', 'targetNode': 'TechnicalStaff', 'segments': [{ 'type': 'straight' }],
                'shape': { 'type': 'umlclassifier', 'relationship': 'association', 'association': 'default'}
            },
            {
                'name': 'connect11', 'sourceNode': 'SurgicalTechnologist', 'targetNode': 'Technologist', 'segments': [{ 'type': 'straight' }],
                'shape': { 'type': 'umlclassifier', 'relationship': 'association', 'association': 'default'}
            },
            {
                'name': 'connect12', 'sourceNode': 'Staff', 'targetNode': 'Department', 'segments': [{ 'type': 'straight' }],
                'shape': { 'type': 'umlclassifier', 'relationship': 'association', 'association': 'default'}
            },
            {
                'name': 'connect13', 'sourceNode': 'Staff', 'targetNode': 'Person', 'segments': [{ 'type': 'straight' }],
                'shape': { 'type': 'umlclassifier', 'relationship': 'association', 'association': 'default' }
            },
            {
                'name': 'connect14', 'sourceNode': 'OperationStaff', 'targetNode': 'Staff', 'segments': [{ 'type': 'straight' }],
                'shape': { 'type': 'umlclassifier', 'relationship': 'association', 'association': 'default' }
            },
            {
                'name': 'connect15', 'sourceNode': 'AdministrativeStaff', 'targetNode': 'Staff', 'segments': [{ 'type': 'straight' }],
                'shape': { 'type': 'umlclassifier', 'relationship': 'association', 'association': 'default' }
            },
            {
                'name': 'connect16', 'sourceNode': 'TechnicalStaff', 'targetNode': 'Staff', 'segments': [{ 'type': 'straight' }],
                'shape': { 'type': 'umlclassifier', 'relationship': 'association', 'association': 'default' }
            }
        ];
        this.pageSettings = {
            scrollLimit: 'diagram'
        };
        this.enableContextMenu = false;
        this.snapSettings = { snapConstraints: 'none' };
    }
}
