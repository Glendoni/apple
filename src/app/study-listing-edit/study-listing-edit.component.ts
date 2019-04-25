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
    Field = 'Namousta';
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
            this.f.name.setValue(this.fields[0].name);
            this.f.label.setValue(this.fields[0].label);
            this.f.value.setValue(this.fields[0].value);
            this.f.type.setValue(this.fields[0].type);
            this.f.required.setValue(this.fields[0].required);
            this.f.question_uniqid.setValue(this.fields[0].question_uniqid);
            //  this.options = this.fields[0].options[0];
        });
        // this.Field = this.selectedFieldType.name;
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
