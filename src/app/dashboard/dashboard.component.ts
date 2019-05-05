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
    editStudy = false;
    users = false;
    invite = false;
    studyItemsAndParticipants = false;
    subListing = false;

    constructor(private service: DynamicformService) {
    }

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

    onEditStudy(value) {
        this.editStudy = value[0];
        this.moduleSwitcher = true;
    }

    onSubListings(value) {
        this.subListing = value[0];
        this.moduleSwitcher = true;
    }

    onUsers(value) {
        this.users = true;
        this.invite = value[0];
        this.moduleSwitcher = true;
    }
    onStudyItemsAndParticipants(value) {


          this.studyItemsAndParticipants = value[0];

        this.moduleSwitcher = true;
    }

    onClose(event: Event): void {
        this.users = false;
        this.createStudy = false;
        this.editStudy = false;
        this.subListing = false;
        this.moduleSwitcher = false;
    }
}
