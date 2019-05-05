import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User, DynamicForm} from '../_models';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class FormService {

  constructor(private http: HttpClient) {
  }

  url = 'http://127.0.0.1:8000';

  edit;
  let;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/text',
      'X-Requested-With': 'XMLHttpRequest',
    })
  };

  getQuestionStreams(id) {
    return this.http.get(this.url + '/api/questionstreams/'+id);
  }

  sendInviteToStudy(value: any) {
    return this.http.post(this.url + '/api/invite/', value);
  }

saveFormForLater(value :any, formId){
  return this.http.post(this.url + '/api/saveForLater/'+formId, value);

}
  getFormValues(formId){
  return this.http.get(this.url + '/api/getFormValues/'+formId);

}

}
