import { Component, Input, Output, EventEmitter } from '@angular/core';

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

    @Output() parksData = new EventEmitter();

    constructor() {
        this.name = 'Natural park for horses';
        this.height = 450;
        this.vegetation = 'Alta';
        this.status = true;
    }

    showEvent() {
        this.parksData.emit({
            'name': this.name,
            'height': this.height,
            'vegetation': this.vegetation,
            'status': this.status
        });
    }

}
