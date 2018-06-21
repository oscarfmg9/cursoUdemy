import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-parks',
    templateUrl: 'parks.component.html',
    styleUrls: ['parks.component.scss']
})

export class ParksComponent {
    @Input() name: string;
    @Input() height: number;
    public vegetation: string;
    public status: boolean;

    constructor() {
        this.name = 'Natural park for horses';
        this.height = 450;
        this.vegetation = 'Alta';
        this.status = true;
    }
}