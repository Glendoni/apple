import {Component, Input, OnInit} from '@angular/core';
import {FiledType} from '../../fieldType';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-field-textbox',
  templateUrl: './field-textbox.component.html',
  styleUrls: ['./field-textbox.component.css']
})
export class FieldTextboxComponent implements OnInit {

  @Input() selectedFieldType: FiledType;
  form: FormGroup;

  loading = false;
  submitted = false;


  value = this.fb.group({

    from: ['', Validators.required],
    to: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      times: this.fb.array([]),
      name: ['glendonsmall@yahoo.co.uk', Validators.required]

    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  getValidity(i) {
    return (<FormArray>this.form.get('times')).controls[i].invalid;
  }

  addGroup() {
    const val = this.fb.group({
      value: ['', Validators.required],
      description: ['', Validators.required]
    });

    const form = this.form.get('times') as FormArray;
    form.push(val);

  }

  removeGroup(index) {
    const form = this.form.get('times') as FormArray;
    form.removeAt(index);
  }

  trackByFn(index: any, item: any) {
    return index;
  }

  onSubmit() {
    this.submitted = true;
    console.log('value: ', this.form.value);
    console.log('valid: ', this.form.valid);
  }
}
