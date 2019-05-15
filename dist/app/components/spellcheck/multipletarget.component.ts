import { Component } from '@angular/core';

@Component({
    selector: 'sd-home',
    templateUrl: './multipletarget.component.html'
})
export class MultipleTargetsComponent {
    public dictionarysettings: any;
    constructor() {
        this.dictionarysettings = {
            dictionaryUrl: '//js.syncfusion.com/ejServices/api/SpellCheck/CheckWords',
            customDictionaryUrl: '//js.syncfusion.com/ejServices/api/SpellCheck/AddToDictionary'
        };
    }
    onClick(args) {
        let spellObj = $('#SpellCheck').data('ejSpellCheck');
        spellObj.showInDialog();
    }
    onTargetUpdating(args) {
        this.onUpdate(args.previousElement);
        $(args.currentElement)[0].style.border = 'thin solid blue';
    }
    onDialogClose(args) {
        this.onUpdate(args.targetElement);
    }
    onUpdate(element) {
        if (!ej.isNullOrUndefined(element)) {
            if ($(element)[0].attributes['id'].value === 'control2') {
                $(element)[0].style.borderColor = 'rgb(169, 169, 169)';
            } else {
                $(element)[0].style.border = 'none';
            }
        }
    }
}
