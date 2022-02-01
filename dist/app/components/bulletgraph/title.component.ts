import { Component, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2/src/ej/core';
import { NorthwindService } from '../../services/northwind.service';

@Component({
selector: 'ej-app',
templateUrl: './title.component.html',
providers: [NorthwindService]
})
export class TitleComponent {
caption: any;
quantitativescale: any;
@ViewChild('bullet') bullet: EJComponents<any, any>;
constructor(public northwindService: NorthwindService) {
this.caption = {
textAngle: 0, location: { x: 5, y: 241 }, text: 'Revenue YTD', textPosition: 'right',
subTitle: {
textAngle: 0, textPosition: 'right',
text: '$ in Thousands', location: { x: 5, y: 257 }
}
};
this.quantitativescale = {
location: { x: 93, y: 175 },
labelSettings: { offset: 14, size: 10 },
majorTickSettings: { size: 13, width: 1, stroke: 'gray' },
minorTickSettings: { size: 5, width: 1, stroke: 'gray' },
};
}
BulletTrim(sender) {
this.bullet.widget.option('captionSettings.enableTrim', sender.isChecked);
}

BulletCapAlignment(sender) {
this.bullet.widget.option('captionSettings.textAlignment', sender.value);
}

BulletCapPosition(sender) {
this.bullet.widget.option('captionSettings.textPosition', sender.value);
}

BulletSubtitleAlignment(sender) {
this.bullet.widget.option('captionSettings.subTitle.textAlignment', sender.value);
}

BulletSubtitlePosition(sender) {
this.bullet.widget.option('captionSettings.subTitle.textPosition', sender.value);
}

}
