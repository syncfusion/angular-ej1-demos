import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'sd-home',
    templateUrl: './api.component.html',
    styleUrls: ['./api.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ApiComponent {
    public dictionarysettings: any;
    public cssNameList: any;
    public cssNamesFields: Object;
    public dataList: any;
    public ignoreWordsFields: Object;
    constructor() {
        this.dictionarysettings = {
            dictionaryUrl: '//js.syncfusion.com/ejServices/api/SpellCheck/CheckWords',
            customDictionaryUrl: '//js.syncfusion.com/ejServices/api/SpellCheck/AddToDictionary'
        };
        this.cssNameList = [
            { id: 'highlighter1', text: 'Highlight1', value: 'errorword' },
            { id: 'highlighter1', text: 'Highlight2', value: 'highlighter' },
            { id: 'highlighter1', text: 'Highlight3', value: 'e-errorword' }
        ];
        this.cssNamesFields = { dataSource: this.cssNameList, text: 'text', value: 'value' };
        this.dataList = [
            { word: 'audiobook' }, { word: 'Blu' }, { word: 'DVDs' }
        ];
        this.ignoreWordsFields = { dataSource: this.dataList, text: 'word' };
    }
    onClick(args) {
        let spellObj = $('#SpellCheck').data('ejSpellCheck');
        spellObj.validate();
    }
    addIgnoreWords(args) {
        $('#SpellCheck').ejSpellCheck({ ignoreWords: !ej.isNullOrUndefined(args.model.value) ? args.model.value.split(',') : [] });
    }
    changeErrorHighlight(args) {
        $('#SpellCheck').ejSpellCheck({ misspellWordCss: args.value });
    }
    onIgnoreAlphaNumericWords(args) {
        $('#SpellCheck').ejSpellCheck({ ignoreSettings: { ignoreAlphaNumericWords: args.isChecked } });
    }
    onIgnoreUrl(args) {
        $('#SpellCheck').ejSpellCheck({ ignoreSettings: { ignoreUrl: args.isChecked } });
    }
    onIgnoreUpperCase(args) {
        $('#SpellCheck').ejSpellCheck({ ignoreSettings: { ignoreUpperCase: args.isChecked } });
    }
    onIgnoreMixedCaseWords(args) {
        $('#SpellCheck').ejSpellCheck({ ignoreSettings: { ignoreMixedCaseWords: args.isChecked } });
    }
    onIgnoreFileNames(args) {
        $('#SpellCheck').ejSpellCheck({ ignoreSettings: { ignoreFileNames: args.isChecked } });
    }
    onIgnoreEmailAddress(args) {
        $('#SpellCheck').ejSpellCheck({ ignoreSettings: { ignoreEmailAddress: args.isChecked } });
    }
    maxSuggestionChange(args) {
        $('#SpellCheck').ejSpellCheck({ maxSuggestionCount: args.value });
    }
    ngAfterViewInit() {
        let spellObj = $('#SpellCheck').data('ejSpellCheck');
        spellObj.validate();
    }
}
