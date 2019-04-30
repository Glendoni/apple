import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DynamicformService, FormService} from "../../_services";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() siteDetails;
  @Output() close: EventEmitter<any> = new EventEmitter();
  public form: FormGroup;
  unsubcribe: any;
  public fields ;

  constructor(private service: FormService) {
    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.fields))
    });
    this.unsubcribe = this.form.valueChanges.subscribe((update) => {
      console.log(update);
      this.fields = JSON.parse(update.fields);
    });
  }

  ngOnInit(): void {

    this.service.getQuestionStreams(this.siteDetails.id).subscribe((dynamic) => {
      this.fields = dynamic;

      console.log(dynamic);
    });

    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.fields))
    });
  }

  onCancel() {
    this.close.emit(null);
  }


}
