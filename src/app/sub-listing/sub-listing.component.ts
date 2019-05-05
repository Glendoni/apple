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
    constructor(private fb: FormBuilder, private service: DynamicformService, private route: ActivatedRoute,
                private router: Router,
                private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        console.log(this.getDetails);
        this.service.studyItemListing(this.siteDetails).subscribe(data => {
            this.fields = data;

        });
    }

    onSubListingEdit(value){

        this.subListingEdit = this.siteDetails;

    }
    onClose() {
        this.close.emit(null);
    }
}
