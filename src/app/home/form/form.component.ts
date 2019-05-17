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
    public fields;
    public fieldvalues;
    public proceed = false;

    constructor(private service: FormService) {
        this.form = new FormGroup({
            //fields: new FormControl(JSON.stringify(this.fields))
        });
        this.unsubcribe = this.form.valueChanges.subscribe((update) => {
            //console.log(update);
            this.fields = JSON.parse(update.fields);
        });
    }

    ngOnInit(): void {

        this.service.getQuestionStreams(this.siteDetails.study_id).subscribe((dynamic) => {
            this.fields = dynamic;
            this.fieldvalues =this.siteDetails.id;
        });


    }

    // convenience getter for easy access to form fields
    get f() {
        return this.form.controls;
    }

    onCancel() {
        this.close.emit(null);
    }

    onProceed(){
        this.proceed = true;
    }

    onSubmit() {
       // console.log('value: ', this.form.value);
    }

    parentSubmit(event) {
        // this.form.controls['name'].setValue(200);
        //console.log(this.fields[0]);

        if (!event.valid) {
            //  this.service.saveFormForLater(event, this.fields[0].studyId,this.siteDetails.id).subscribe((data) => {
            //
            this.service.saveFormForLater(event, this.siteDetails.id).subscribe((data) => {
                //console.log(this.fields[0].question_uniqid);


            })
        } else {

            this.service.saveFormFor(event, this.fields[0].question_uniqid).subscribe((data) => {

            })

            // this.service.saveFormForLater(event, this.fields[0].question_uniqid).subscribe((data) => {
            //
            //     console.log(data);
            //
        }
    }
}
