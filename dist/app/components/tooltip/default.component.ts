import { Component } from '@angular/core';
@Component({
    selector: 'ej-app',
    templateUrl: './default.component.html'
})
export class DefaultComponent {
    content: string;
    width: string;
    www: string;
    wwwWidth: string;
    position: object;
    objectOriented: string;
    objWidth: string;
    positionObj: object;
    constructor() {
        this.content = 'ECMAScript (or ES) is a trademarked scripting-language specification standardized by Ecma International in ECMA-262 and ISO/IEC 16262.';
        this.width = '270px';
        this.www = 'The World Wide Web (WWW) is an information space where documents and other web resources are identified by URLs and can be accessed via the Internet.';
        this.wwwWidth = '270px';
        this.position = {
                   stem: {
                       horizontal: 'left',
                       vertical: 'center'
                   },
                   target: {
                       horizontal: 'right',
                       vertical: 'center'
                   },
               };
        this.objectOriented = 'Object-oriented programming (OOP) is a programming language model organized around objects rather than "actions" and data rather than logic.';
        this.objWidth = '270px';
        this.positionObj = {
                   stem: {
                       horizontal: 'right',
                       vertical: 'center'
                   },
                   target: {
                       horizontal: 'left',
                       vertical: 'center'
                   },
               };
    }
}
