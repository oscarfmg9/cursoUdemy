import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-parks',
    templateUrl: 'parks.component.html',
    styleUrls: ['parks.component.scss']
})

export class ParksComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
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

    ngOnChanges(changes: SimpleChanges) {
        // console.log('Metodo OnChanges lanzado');
    }

    ngOnInit() {
        // console.log('Metodo OnInit lanzado');
    }

    ngDoCheck() {
        console.log('Metodo ngDoCheck lanzado');
    }

    ngOnDestroy() {
        console.log('Metodo ngOnDestroy lanzado');
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
