import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService, FormService} from "../../_services";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-global-site-config',
  templateUrl: './global-site-config.component.html',
  styleUrls: ['./global-site-config.component.css']
})
export class GlobalSiteConfigComponent implements OnInit {

    form: FormGroup;
    submitted = false;
    study_id: any;
    placeholder = 'Enter Site Name';
    @Input() siteDetails;
    @Output() close: EventEmitter<any> = new EventEmitter();

    constructor(private fb: FormBuilder, private service: FormService, private route: ActivatedRoute,
                private router: Router,
                private authenticationService: AuthenticationService) {
    }

    ngOnInit() {


        if (this.siteDetails.id) {
            this.study_id = this.siteDetails.id;
        } else {
            this.study_id = '';
        }


        this.form = this.fb.group({
            site_name: ['', Validators.required],
            path_to_logo: [''],
            intro_text: ['', Validators.required],
            study_id: [this.siteDetails.id, Validators.required],
            background_colour: ['#ffffff'],
            text_colour: ['#000000'],
        });
        //


        this.service.getGlobalSiteConfig(this.study_id).subscribe(data => {
            console.log(this.study_id);

            data = data[0];

            if(data) {
                this.f.site_name.setValue(data.site_name);
                this.f.intro_text.setValue(data.intro_text);
                this.f.path_to_logo.setValue(data.path_to_logo);
                this.f.background_colour.setValue(data.background_colour);
                this.f.text_colour.setValue(data.text_colour);
            }
        })

    }

    // convenience getter for easy access to form fields
    get f() {
        return this.form.controls;
    }

    onSubmit() {
        this.submitted = true;
        console.log('value: ', this.form.value);
        console.log('valid: ', this.form.valid);

        this.service.globalsiteconfig(this.form.value)
            .pipe(first())
            .subscribe(
                data => {
                    //this.alertService.success('Registration successful', true);
                    // this.router.navigate(['/login']);
                    //this.router.navigate(['/dashboard']);

                    console.log(data);
                }
            );
    }


    onCancel() {

        this.close.emit(null);

    }
}
