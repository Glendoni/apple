import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FiledType} from '../fieldType';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DynamicformService} from '../_services';
import {first} from 'rxjs/operators';

@Component({
    selector: 'app-study-listing',
    templateUrl: './study-listing.component.html',
    styleUrls: ['./study-listing.component.css']
})
export class StudyListingComponent implements OnInit {
    @Output() close: EventEmitter<any> = new EventEmitter();
    public form: FormGroup;
    unsubcribe: any;

    @Input() siteDetails;

    public fields;
    showListingEdit = false;
    showListingEditor = false;
    showListingCreate = false;
    studyId;
    createNewField =true
    addField  =  false;

    constructor(private service: DynamicformService) {
        this.form = new FormGroup({
            fields: new FormControl(JSON.stringify(this.fields))
        });
        this.unsubcribe = this.form.valueChanges.subscribe((update) => {
            console.log(update);
            this.fields = JSON.parse(update.fields);
        });
    }

    ngOnInit(): void {

        this.service.getStudyQuestions(this.siteDetails).subscribe((questions) => {
            this.fields = questions;

        });

        this.form = new FormGroup({
            fields: new FormControl(JSON.stringify(this.fields))
        });
    }

    onCreateNewField() {
        this.showListingCreate = true;
        this.studyId = this.siteDetails;
    }

    onUpload(e): void {
        console.log(e);
    }

    onShowListingEdit(value): void {
        this.showListingEditor = value;
        this.createNewField = false;
console.log(value)
        this.showListingEdit = value;
        this.addField = true;
    }

    onCancel() {
        this.close.emit(null);
        this.addField = false;
        this.createNewField = false;
    }
    onClose() {

        this.close.emit(null);
        this.createNewField = true;
        this.showListingEditor = false;
    }
}
