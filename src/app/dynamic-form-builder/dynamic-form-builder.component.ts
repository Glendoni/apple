import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {DynamicformService, FormService} from "../_services";
@Component({
  selector: 'dynamic-form-builder',
  template:`
    <form (ngSubmit)="onSubmit.emit(this.form.value)" [formGroup]="form" class="form-horizontal">
      <div *ngFor="let field of fields">
          <field-builder [field]="field" [form]="form"></field-builder>
      </div>
      <div class="form-row"></div>
      <div class="form-group row">
        <div class="col-md-3"></div>
        <div class="col-md-9">
        
          <button type="submit" [disabled]="!form.valid" class="btn btn-primary">Save</button>
          <strong >Saved all values</strong>
        </div>
      </div>
 
    </form> {{ form.value | json  }}
  `,
})
export class DynamicFormBuilderComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();
  @Input() fields: any[] = [];
  @Input() fieldvalue: any[] = [];;
  form: FormGroup;
  constructor(private service: FormService) {


  }

  ngOnInit() {
    console.log(this.fieldvalue);
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
       console.log(data);

      const p = data;
        //console.log(this.fieldvalues);
      for (var key in p) {
        if (p.hasOwnProperty(key)) {
          console.log(key + " -> " + p[key]);
          this.form.controls[''+key+''].setValue(p[key]);
        }
      }
    })

   //const p =  this.fieldvalue ;


    /*
    {"options":[{"key":"1","label":"loved"},{"key":"2","label":"hate"}],"name":"Love","label":"where is the love",
    "type":"dropdown","value":null,"question_uniqid":"5cc190dd9d7e8","required":true,
    "trackingId":"qsjx6galfxocup7k7yh718"}
     */


    //

    // for (var key in p) {
    //   if (p.hasOwnProperty(key)) {
    //     console.log(key + " -> " + p[key]);
    //    // this.form.controls.key.setValue(p[key]);
    //   }
    // }
    //



  }




}

