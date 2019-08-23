import { Component } from '@angular/core';

@Component({
    selector: 'sd-home',
    templateUrl: './spellcheck.component.html'
})
export class SpellCheckComponent {
    public dictionarysettings: any;
    public content: string;
    constructor() {
        this.dictionarysettings = {
            dictionaryUrl: '//js.syncfusion.com/ejServices/api/SpellCheck/CheckWords',
            customDictionaryUrl: '//js.syncfusion.com/ejServices/api/SpellCheck/AddToDictionary'
        };
    }
    onClick(event) {
        let spellObj = $('#SpellCheck').data('ejSpellCheck');
        spellObj.showInDialog();
    }
}
