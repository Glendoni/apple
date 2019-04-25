import {Component, OnInit} from '@angular/core';

import {FormGroup, FormControl} from '@angular/forms';
import {DynamicformService} from './_services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    public form: FormGroup;
    unsubcribe: any;
    public fields;

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

        this.service.getQuestionStreams().subscribe((dynamic) => {
            this.fields = dynamic;
        });

        this.form = new FormGroup({
            fields: new FormControl(JSON.stringify(this.fields))
        });
    }
}
