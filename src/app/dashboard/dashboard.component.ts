import {Component, OnInit} from '@angular/core';
import {DynamicformService} from '../_services';
import {FiledType} from '../fieldType';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    public fields;
    selectedFieldType = false;
    moduleSwitcher = false;
    createStudy = false;

    constructor(private service: DynamicformService) {}

    ngOnInit() {
        this.service.getStudies().subscribe((data) => {
            this.fields = data;
        });
    }

    onModuleSwitcher(value): void {
        this.moduleSwitcher = value;
    }

    onCreateStudy(): void {
        this.moduleSwitcher = true;
        this.createStudy = true;
    }

    onClose(event: Event): void {
        this.createStudy = false;
        this.moduleSwitcher = false;
    }
}
