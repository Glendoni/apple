import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService, DynamicformService} from "../_services";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-study-creater-edit',
  templateUrl: './study-creater-edit.component.html',
  styleUrls: ['./study-creater-edit.component.css']
})
export class StudyCreaterEditComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  placeholder = 'Enter Site Name';
  @Input() siteDetails;
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(private fb: FormBuilder, private service: DynamicformService,  private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {

    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      invite_code: ['', Validators.required],
      studyId: [this.siteDetails, Validators.required],
    });

    this.service.getStudy(this.siteDetails).subscribe(data => {

      this.f.name.setValue(data.name);
      this.f.description.setValue(data.description);
      this.f.invite_code.setValue(data.invite_code);
    })

  }
  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log('value: ', this.form.value);
    console.log('valid: ', this.form.valid);

    this.service.editStudy(this.form.value)
        .pipe(first())
        .subscribe(
            data => {
              console.log(data);
              //this.alertService.success('Registration successful', true);
              // this.router.navigate(['/login']);
              this.router.navigate(['/dashboard']);
            }
        );
  }


  onCancel(){

    this.close.emit(null);

  }

}
