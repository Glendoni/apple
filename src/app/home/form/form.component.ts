import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from "@angular/forms";
import {DynamicformService, FormService} from "../../_services";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    @Input() siteDetails;
    @Output() close: EventEmitter<any> = new EventEmitter();
    //@Output() fld: EventEmitter<any> = new EventEmitter();
    public form: FormGroup;
    unsubcribe: any;
    public fields =false;
    public fieldvalues;

    constructor(private service: FormService) {
        this.form = new FormGroup({
            //fields: new FormControl(JSON.stringify(this.fields))
        });
        this.unsubcribe = this.form.valueChanges.subscribe((update) => {
            console.log(update);
            this.fields = JSON.parse(update.fields);
        });
    }

    ngOnInit(): void {

        this.service.getQuestionStreams(this.siteDetails.id).subscribe((dynamic) => {
            this.fields = dynamic;
            this.fieldvalues =dynamic[0].question_uniqid;


//this.getFormValues(dynamic[0].question_uniqid);

            // this.service.getFormValues(dynamic[0].question_uniqid).subscribe((data) => {
            //     this.fieldvalues = data;
            //
            //     console.log(this.fieldvalues);
            // })
        });

        this.form = new FormGroup({
            // fields: new FormControl(JSON.stringify(this.fields))
        });
    }

// getFormValues(form_id){
//
//     this.service.getFormValues(form_id).subscribe((data) => {
//        this.fieldvalues = data;
//
//         console.log(this.fieldvalues);
//     })
//
// }


    // convenience getter for easy access to form fields
    get f() {
        return this.form.controls;
    }

    onCancel() {
        this.close.emit(null);
    }

    onSubmit() {

        console.log('value: ', this.form.value);

    }

    parentSubmit(event) {
        // this.form.controls['name'].setValue(200);
        console.log(this.fields[0].question_uniqid);
        this.service.saveFormForLater(event, this.fields[0].question_uniqid).subscribe((data) => {

            console.log(data);
        })
    }
}
