import { Component } from '@angular/core';
@Component({
    selector: 'ej-app',
    templateUrl: './livetile.component.html'
})
export class LiveTileComponent {
    caption1: any;
    caption2: any;
    caption3: any;
    caption4: any;
    liveTile1: any;
    liveTile2: any;
    liveTile3: any;
    liveTile4: any;
    liveTile5: any;
    badge1: any;
    constructor() {
        this.caption1 = { text: 'Play' };
        this.caption2 = { text: 'People' };
        this.caption3 = { text: 'Photos' };
        this.caption4 = { text: 'Weather' };
        this.liveTile1 = {
            updateInterval: 3000, enabled: true, type: 'flip', imageUrl: ['app/content/images/tile/windows/alerts.png',
                'app/content/images/tile/windows/bing.png', 'app/content/images/tile/windows/camera.png']
        };
        this.liveTile2 = {
            updateInterval: 3500, enabled: true, type: 'flip',
            imageUrl: ['app/content/images/tile/windows/alerts.png', 'app/content/images/tile/windows/bing.png', 'app/content/images/tile/windows/camera.png']
        };
        this.liveTile3 = {
            updateInterval: 5000, enabled: true, type: 'slide',
            imageUrl: ['app/content/images/tile/windows/people_1.png', 'app/content/images/tile/windows/people_2.png', 'app/content/images/tile/windows/people_3.png']
        };
        this.liveTile4 = {
            updateInterval: 4000, enabled: true, type: 'slide',
            imageUrl: ['app/content/images/tile/windows/pictures.png', 'app/content/images/tile/windows/photo_1.png', 'app/content/images/tile/windows/photo_2.png',
                'app/content/images/tile/windows/pictures.png', 'app/content/images/tile/windows/photo_1.png']
        };
        this.liveTile5 = {
            updateInterval: 3000, enabled: true, type: 'carousel',
            imageUrl: ['app/content/images/tile/windows/weather.png', 'app/content/images/tile/windows/weather_1.png', 'app/content/images/tile/windows/weather_2.png']
        };
        this.badge1 = { enabled: 'true', value: '10' };
    }
}
