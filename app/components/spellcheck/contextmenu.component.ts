import { Component } from '@angular/core';

@Component({
    selector: 'sd-home',
    templateUrl: './contextmenu.component.html'
})
export class ContextMenuComponent {
    public dictionarysettings: any;
    constructor() {
        this.dictionarysettings = {
            dictionaryUrl: '//js.syncfusion.com/ejServices/api/SpellCheck/CheckWords',
            customDictionaryUrl: '//js.syncfusion.com/ejServices/api/SpellCheck/AddToDictionary'
        };
    }
    onClick(event) {
        let spellObj = $('#SpellCheck').data('ejSpellCheck');
        spellObj.validate();
    }
}
