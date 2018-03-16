import { Component } from '@angular/core';

@Component({
    selector: 'app-store',
    templateUrl: 'store.component.html',
    styleUrls: ['store.component.scss']
})

export class StoreComponent {
    public title;

    constructor() {
        this.title = 'New Store Open';
    }
}

