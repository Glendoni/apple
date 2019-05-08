import {Component, Input, OnInit} from '@angular/core';
import {FiledType} from '../../fieldType';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DynamicformService} from "../../_services";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-field-textbox',
  templateUrl: './field-textbox.component.html',
  styleUrls: ['./field-textbox.component.css']
})
export class FieldTextboxComponent implements OnInit {

  @Input() selectedFieldType: FiledType;
  @Input() studyId;
  form: FormGroup;

  loading = false;
  submitted = false;
  Field;

  constructor(private fb: FormBuilder, private service: DynamicformService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      label: ['', Validators.required],
      type: [this.selectedFieldType.id, Validators.required],
      studyId: [this.studyId.id, Validators.required],
      required: [false],
    });
    this.Field = this.selectedFieldType.name;
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;



    console.log('value: ', this.form.value);
    console.log('valid: ', this.form.valid);

    this.service.createQuestion(this.form.value)
        .pipe(first())
        .subscribe(
            data => {
              console.log(data);

            }
        );
  }


}
