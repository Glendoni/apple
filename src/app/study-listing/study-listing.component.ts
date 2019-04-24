import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FiledType} from '../fieldType';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DynamicformService} from '../_services';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-study-listing',
  templateUrl: './study-listing.component.html',
  styleUrls: ['./study-listing.component.css']
})
export class StudyListingComponent implements OnInit {

  @Output() close: EventEmitter<any> = new EventEmitter();
  public form: FormGroup;
  unsubcribe: any;

  @Input() siteDetails;

  public fields: any[];
  showListingEdit = false;

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

    this.service.getStudyQuestions(this.siteDetails).subscribe((dynamic) => {

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

  onShowListingEdit(value): void{
    console.log(value)
    this.showListingEdit = value;
  }

  onCancel(){

    this.close.emit(null);

  }

}
