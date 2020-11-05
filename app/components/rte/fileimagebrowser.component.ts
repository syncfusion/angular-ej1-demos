import {Component} from '@angular/core';

@Component({
  selector: 'ej-app',
  templateUrl: './fileimagebrowser.component.html'
})
export class FileImageBrowserComponent {
  content: string;
  ajaxSettings: any;
  fileService: any;
  toolslist: any;
  tools: any;
  imagebrowser: Object;
  filebrowser: Object;
  constructor() {
      this.fileService = '//js.syncfusion.com/demos/ejServices/api/FileExplorer/FileOperations/doJSONPAction';
      this.content = 'Description: The Rich Text Editor (RTE) control is an easy to render in client side. Customer easy to edit the contents and get the HTML content from RTE';
      this.toolslist = ['images'];
      this.tools = { images: ['image'] };
      this.imagebrowser = { filePath: '//js.syncfusion.com/demos/ejServices/Content/FileBrowser/', ajaxAction: this.fileService, extensionAllow: '*.png, *.gif, *.jpg, *.jpeg, *.docx',
                            ajaxSettings: this.ajaxSettings };
      this.filebrowser = { filePath: '//js.syncfusion.com/demos/ejServices/Content/FileBrowser/', ajaxAction: this.fileService, extensionAllow: '*.txt, *.png, *.pdf,*.jpeg',
                            ajaxSettings: this.ajaxSettings };
  }
}
