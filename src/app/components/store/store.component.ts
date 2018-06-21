import { Component } from '@angular/core';

@Component({
    selector: 'app-store',
    templateUrl: 'store.component.html',
    styleUrls: ['store.component.scss']
})

export class StoreComponent {
    public title;
    public parksName: string;

    constructor() {
        this.title = 'New Store Open';
    }

    showName() {
        console.log('el nombre del parque es ' + this.parksName);
    }
}

