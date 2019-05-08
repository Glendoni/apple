import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {AuthenticationService, DynamicformService} from '../_services';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-sub-listing',
    templateUrl: './sub-listing.component.html',
    styleUrls: ['./sub-listing.component.css']
})
export class SubListingComponent implements OnInit {
    @Input() siteDetails;
    @Output() close: EventEmitter<any> = new EventEmitter();
    fields: any;
    studyQuestions;
    subListingEdit = false
    addStudy =false;
    subListing = true;
    constructor(private fb: FormBuilder, private service: DynamicformService, private route: ActivatedRoute,
                private router: Router,
                private authenticationService: AuthenticationService) {
    }

    ngOnInit() {

        this.service.studyItemListing(this.siteDetails).subscribe(data => {
            this.fields = data;

        });
    }

    onSubListingEdit(value){
        console.log(value)
        this.subListingEdit = value;
        this.addStudy =false;

        this.subListing = false;
    }

    onSubListing(){
        this.subListing = true;
        this.subListingEdit = false
        this.addStudy =false;
    }
    onAddStudy(value){
        console.log(value)
        this.addStudy = this.siteDetails;
        this.subListingEdit = false


    }
    onClose() {
        this.close.emit(null);
    }

}
