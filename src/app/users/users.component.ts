import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {DynamicformService, FormService} from "../_services";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    form: FormGroup;
    placeholder = 'enter email';
    submitted = false;
    fields;
    @Input() siteDetails;
    @Output() close: EventEmitter<any> = new EventEmitter();

    constructor(private fb: FormBuilder,private dynamic: DynamicformService, private service: FormService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {

        this.form = this.fb.group({
            invitee_email: ['', Validators.required],
            study_id: [this.siteDetails, Validators.required],

        });



    }

    // convenience getter for easy access to form fields
    get f() {
        return this.form.controls;
    }

    onCancel() {

        this.close.emit(null);

    }


    onSubmit() {
        this.submitted = true;
        console.log('value: ', this.form.value);
        console.log('valid: ', this.form.valid);

        this.service.sendInviteToStudy(this.form.value)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                    //this.alertService.success('Registration successful', true);
                    // this.router.navigate(['/login']);
                    this.router.navigate(['/dashboard']);
                }
            )

    }
}
