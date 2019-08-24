import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {DynamicformService, FormService} from "../_services";

@Component({
    selector: 'dynamic-form-builder',
    template: `
    <form (ngSubmit)="onSaveForm(this.form.value)" [formGroup]="form" class="form-horizontal">
      <div *ngFor="let field of fields">
          <field-builder [field]="field" [form]="form"></field-builder>
      </div>
      <div class="form-row"></div>
      <div class="form-group row">
        <div class="col-md-3"></div>
        <div class="col-md-9">
        <button type="submit" [disabled]="form.valid"  class="btn btn-primary">Save For Later</button> |
          <button type="submit" [disabled]="!form.valid" class="btn btn-primary">Save & Complete</button>
          
          <strong >Saved all values</strong>
        </div>
      </div>
 
    </form> {{ form.value | json  }} {{ form.valid }}
  `,
})
export class DynamicFormBuilderComponent implements OnInit {
    @Output() onSubmit = new EventEmitter();
    @Output() onSubmitOfficial = new EventEmitter();
    @Input() fields: any[] = [];
    @Input() fieldvalue: any[] = [];
;
    form: FormGroup;

    constructor(private service: FormService) {}

    ngOnInit() {

        const fieldsCtrls = {};
        for (let f of this.fields) {
            if (f.type != 'checkbox') {
                fieldsCtrls[f.name] = new FormControl(f.value || '', Validators.required)
            } else {
                let opts = {};
                for (let opt of f.options) {
                    opts[opt.key] = new FormControl(opt.value);
                }
                fieldsCtrls[f.name] = new FormGroup(opts)
            }
        }

        this.form = new FormGroup(fieldsCtrls);

        this.service.getFormValues(this.fieldvalue).subscribe((data) => {
            const p = data;
            for (var key in p) {
                if (p.hasOwnProperty(key)) {
                    console.log(p[key])

                    this.form.controls['' + key + ''].setValue(p[key]);
                }

            }
        });
    }

    onSaveForm(formData) {

        if (this.form.valid) {


            this.onSubmitOfficial.emit(this.form.value)
        } else {


             this.onSubmit.emit(this.form.value)
        }
    }
}
