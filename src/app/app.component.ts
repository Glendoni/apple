import {Component, OnInit} from '@angular/core';

import {FormGroup, FormControl} from '@angular/forms';
import {first} from 'rxjs/operators';
import {DynamicformService} from './_services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    public form: FormGroup;
    unsubcribe: any;
    public fields: any[];
    public _fields: any[] = [
        {
            type: 'text',
            name: 'firstName',
            label: 'First Name',
            value: 'Pen',
            required: true,
        },
        {
            type: 'text',
            name: 'lastName',
            label: 'Last Name',
            value: '',
            required: true,
        },
        {
            type: 'text',
            name: 'email',
            label: 'Email',
            value: '',
            required: true,
        },

        {
            type: 'file',
            name: 'picture',
            label: 'Picture',
            required: true,
            onUpload: this.onUpload.bind(this)
        },
        {
            type: 'dropdown',
            name: 'country',
            label: 'Country',
            value: 'in',
            required: true,
            options: [
                {key: 'in', label: 'India'},
                {key: 'us', label: 'USA'}
            ]
        },
        {
            type: 'radio',
            name: 'country',
            label: 'Country',
            value: 'in',
            required: true,
            options: [
                {key: 'm', label: 'Male'},
                {key: 'f', label: 'Female'}
            ]
        },
        {
            type: 'checkbox',
            name: 'hobby',
            label: 'Hobby',
            required: true,
            options: [
                {key: 'f', label: 'Fishing'},
                {key: 'c', label: 'Cooking'}
            ]
        }
    ];

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

        this.service.getQuestions().subscribe((dynamic) => {

            this.fields = dynamic;
        });

        this.form = new FormGroup({
            fields: new FormControl(JSON.stringify(this.fields))
        });
    }

    onUpload(e) {
        console.log(e);

    }

    getFields() {
        return this.fields;
    }

    ngDistroy() {
        this.unsubcribe();
    }

    get f() {
        return this.form;
    }

    parentSubmit(event: any) {
        console.log(event)

        this.service.create(event)
            .pipe(first())
            .subscribe(
                data => {
                    console.log(data);
                });

        console.log(this.f.status)
        console.log( this.f.value);
    }



}
