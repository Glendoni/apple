import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService, DynamicformService} from "../_services";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-sub-users',
    templateUrl: './sub-users.component.html',
    styleUrls: ['./sub-users.component.css']
})
export class SubUsersComponent implements OnInit {
    @Input() siteDetails;
    @Output() close: EventEmitter<any> = new EventEmitter();
    form: FormGroup;
    fields;

    constructor(private fb: FormBuilder, private service: DynamicformService, private route: ActivatedRoute,
                private router: Router,
                private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.form = this.fb.group({
            options: this.fb.array([]),

        })

        this.service.study_users(this.siteDetails.study_id,this.siteDetails.id ).subscribe(data => {
            this.fields = data;
            console.log(data);

            const p = data;
            //console.log(this.fieldvalues);
            for (var key in p) {
                if (p.hasOwnProperty(key)) {
                    console.log(p[key].name);
                    //this.form.controls[''+key+''].setValue(p[key]);
                    this.addGroup(p[key]);
                }
            }
        });
 

    }

    // convenience getter for easy access to form fields
    get f() {
        return this.form.controls;
    }

    addGroup(value) {

        const item_id = this.siteDetails.id;
        const val = this.fb.group({
            user_id:[value.id],
            value: [value.value],
            study_items_id: [item_id],
            study_id: [value.study_id],
            name: [value.name]
        });

        const form = this.form.get('options') as FormArray;
        if (val) form.push(val);
    }

    onSubmit() {
       // this.submitted = true;
        console.log('value: ', this.form.value);
        //console.log('valid: ', this.form.valid);
        console.log(this.siteDetails);

        this.service.study_item_access(this.form.value).subscribe(data => {
            this.fields = data;

        });
    }
}
