import { Component } from '@angular/core';

@Component({
    selector: 'ej-app',
    templateUrl: './multiplevalue.component.html',
    styleUrls: ['./multiplevalue.component.css']
})
export class MultipleValueComponent {
    language: Array<string>;
    constructor() {
        this.language = ['ActionScript', 'AppleScript', 'ASP', 'BASIC', 'BeanShell',
            'C', 'C++', 'C#', 'Clojure', 'COBOL', 'ColdFusion', 'DataFlex', 'DCL',
            'Erlang', 'E#', 'Fortran', 'F#', 'Flex', 'Google Apps Script', 'Groovy', 'Haskell', 'Hope', 'IBM HAScript',
            'Java', 'JavaScript', 'J#', 'Lisp', 'MATLAB', 'Oak', 'Perl', 'PHP',
            'Python', 'Ruby', 'Scala', 'Scheme', 'T-SQL', 'WebQL', 'ZOPL'];
    }
}
