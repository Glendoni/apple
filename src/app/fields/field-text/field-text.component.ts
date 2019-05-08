import {Component, OnInit,Input} from '@angular/core';

import {FormControl, FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';
import { FiledType } from '../../fieldType';

import {first} from 'rxjs/operators';
import {DynamicformService} from '../../_services';

@Component({
    selector: 'app-field-text',
    templateUrl: './field-text.component.html',
    styleUrls: ['./field-text.component.css']
})
export class FieldTextComponent implements OnInit {

    @Input() selectedFieldType: FiledType;
    @Input() studyId;
    form: FormGroup;

    loading = false;
    submitted = false;
    Field;

    value = this.fb.group({

        key: ['', Validators.required],
        label: ['', Validators.required]
    });

    constructor(private fb: FormBuilder, private service: DynamicformService) {
    }

    ngOnInit() {
        this.form = this.fb.group({

            name: ['', Validators.required],
            label: ['', Validators.required],
            type: [this.selectedFieldType.id, Validators.required],
            studyId: [this.studyId, Validators.required],
            value: [''],
            required: [false],
        });
        this.Field = this.selectedFieldType.name;
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.form.controls;
    }

    getValidity(i) {
        return (<FormArray>this.form.get('options')).controls[i].invalid;
    }

    // addGroup() {
    //     const val = this.fb.group({
    //         key: ['', Validators.required],
    //         label: ['', Validators.required]
    //     });
    //
    //     const form = this.form.get('options') as FormArray;
    //     form.push(val);
    // }

    // removeGroup(index) {
    //     const form = this.form.get('options') as FormArray;
    //     form.removeAt(index);
    // }

    // trackByFn(index: any, options: any) {
    //     return index;
    // }

    onSubmit() {
        this.submitted = true;

        const optionLength = this.form.value.options.length;
        console.log('option: ', this.form.value.options.length);
        console.log('value: ', this.form.value);
        console.log('valid: ', this.form.valid);
        if ((!optionLength) || this.form.valid === false) {
            return;
        }
        // this.service.createQuestion(this.form.value)
        //     .pipe(first())
        //     .subscribe(
        //         data => {
        //             console.log(data);
        //             //this.alertService.success('Registration successful', true);
        //             // this.router.navigate(['/login']);
        //         }
        //     );
    }
}


