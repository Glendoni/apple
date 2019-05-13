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
    moduleSwitcher = true;
    createStudy = false;
    editStudy = false;
    users = false;
    inviteStudyUsers = false;
    studyItemsAndParticipants = false;
    subListing = false;
    studyQuestions = false;
    globalSiteConfig =false;
    globalSiteConfigOverwrite = false;
    globalSiteConfigShow = false;
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

    onStudyQuestions(value): void {
        this.moduleSwitcher = false;
        this.studyQuestions = value;
    }

    onCreateStudy(): void {
        this.moduleSwitcher = false;
        this.createStudy = true;
    }

    onGlobalSiteConfig(): void {


        this.moduleSwitcher = false;
        this.globalSiteConfigShow = true;
        this.globalSiteConfig = true;
    }
    onGlobalSiteConfigOverwrite(value): void {


        this.moduleSwitcher = false;
        this.globalSiteConfigOverwrite = value[0];
    }

    onEditStudy(value) {
        this.editStudy = value[0];
        this.moduleSwitcher = false;
    }

    onSubListings(value) {
        this.subListing = value[0];
        this.moduleSwitcher = false;
    }

    onInviteStudyUsers(value) {

        this.inviteStudyUsers = value[0];
        this.moduleSwitcher = false;
    }
    onStudyItemsAndParticipants(value) {


          this.studyItemsAndParticipants = value[0];

        this.moduleSwitcher = false;
    }

    onClose(event: Event): void {
        this.inviteStudyUsers = false;
        this.createStudy = false;
        this.editStudy = false;
        this.subListing = false;
        this.moduleSwitcher = true;
        this.studyQuestions = false;
        this.studyItemsAndParticipants = false;
        this.globalSiteConfigOverwrite = false;
        this.globalSiteConfigShow = false;
    }
}
