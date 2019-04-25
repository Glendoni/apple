import {Component, OnInit, Input} from '@angular/core';
import {FiledType} from '../fieldType';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {DynamicformService} from '../_services';


@Component({
    selector: 'app-study-listing-edit',
    templateUrl: './study-listing-edit.component.html',
    styleUrls: ['./study-listing-edit.component.css']
})
export class StudyListingEditComponent implements OnInit {
    @Input() siteDetails;
    form: FormGroup;
    loading = false;
    submitted = false;
    fields;
    options;

    value = this.fb.group({
        key: ['', Validators.required],
        label: ['', Validators.required]
    });

    constructor(private fb: FormBuilder, private service: DynamicformService) {
    }

    ngOnInit() {
        this.form = this.fb.group({
            options: this.fb.array([]),

            name: ['', Validators.required],
            label: ['', Validators.required],
            type: ['', Validators.required],
            value: [''],
            question_uniqid: [''],
            required: [],
        });

        this.service.getQuestionStream(this.siteDetails).subscribe((data) => {
            this.fields = data;
            this.f.name.setValue(data[0].name);
            this.f.label.setValue(data[0].label);
            this.f.value.setValue(data[0].value);
            this.f.type.setValue(data[0].type);
            this.f.required.setValue(data[0].required);
            this.f.question_uniqid.setValue(data[0].question_uniqid);
            this.f.options.setValue(this.generateFormOptions(data[0].options));
        });
    }

    generateFormOptions(options = null) {
        if ( Array.isArray(options)) {
            options.map(item => {
                const val = this.fb.group({
                    key: [item.key, Validators.required],
                    label: [item.label, Validators.required]
                });
                const form = this.form.get('options') as FormArray;
                form.push(val);
                return options;
            });
        }
        return options;
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.form.controls;
    }

    getValidity(i) {
        return (<FormArray>this.form.get('options')).controls[i].invalid;
    }

    addGroup() {
        const val = this.fb.group({
            key: ['', Validators.required],
            label: ['', Validators.required]
        });

        const form = this.form.get('options') as FormArray;
        form.push(val);
    }

    removeGroup(index) {
        const form = this.form.get('options') as FormArray;
        form.removeAt(index);
    }

    trackByFn(index: any, options: any) {
        return index;
    }

    onSubmit() {
        this.submitted = true;
        const optionLength = this.form.value.options.length;
        if ((!optionLength) || this.form.valid === false) {
            return;
        }
        this.service.updateQuestionStream(this.form.value)
            .pipe(first())
            .subscribe(
                data => {
                }
            );
    }
}
