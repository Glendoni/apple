import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {ActivatedRoute, Router} from "@angular/router";


import {User, DynamicForm} from '../_models';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class DynamicformService {
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

    /*
return this.http.get<User[]>('http://127.0.0.1:8000/api/get-details');
*/
    createQuestion(user: User) {
        //return drop;
        return this.http.post(this.url + '/api/createStream/', user);
    }

    create(user: User) {
        return this.http.post(this.url + '/api/rtn', user);
    }
    createStudy(user: User) {
        return this.http.post(this.url + '/api/createStudy/', user);
    }
    getStudies() {
        return this.http.get(this.url + '/api/studies/');
    }
    getStudy(id) {
        return this.http.get(this.url + '/api/studies/'+ id);
    }

    editStudy(value: any) {
        return this.http.post(this.url + '/api/studies/', value);
    }
    getQuestionStream(value) {
        return this.http.get(this.url + '/api/questionstream/' + value);
    }

    updateQuestionStream(user: User) {
        return this.http.post(this.url + '/api/saveEditStudyField/', user);
    }

    getStudyQuestions(study) {
        return this.http.post(this.url + '/api/getStudyQuestions', study);
    }

    inviteConfigurator(study) {
        return this.http.get(this.url + '/api/linkChecker/'+ study);
    }
    addStudyItem(value :any, formId){
        return this.http.post(this.url + '/api/addStudyItem/'+formId, value);
    }

    studyItemListing(formId){
        return this.http.get(this.url + '/api/studyItemListing/'+formId);
    }
    study_users(studyId,formId ){
        return this.http.get(this.url + '/api/study_users/'+studyId+'/'+formId);
    }
    study_item_access(formId){
        return this.http.post(this.url + '/api/study_item_access/',formId);
    }
    study_users_form_populators(formId){
        return this.http.get(this.url + '/api/study_users_form_populators/'+formId);
    }


    onUpload(e) {
        console.log(e);
    }
}
