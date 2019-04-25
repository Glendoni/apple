import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';


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
        return this.http.post(this.url + '/api/create/', user);
    }

    create(user: User) {
        return this.http.post(this.url + '/api/rtn', user);
    }
    createStudy(user: User) {
        return this.http.post(this.url + '/api/createstudy/', user);
    }
    getStudies() {
        return this.http.get(this.url + '/api/studies/');
    }
    getQuestionStream(value) {
        return this.http.get(this.url + '/api/questionstream/' + value);
    }

    updateQuestionStream(user: User) {
        return this.http.post(this.url + '/api/saveEditStudyField/', user);
    }

    getQuestionStreams() {
        return this.http.get(this.url + '/api/questionstreams');
    }

    getStudyQuestions(study) {
        return this.http.post(this.url + '/api/getStudyQuestions', study);
    }

    onUpload(e) {
        console.log(e);
    }
}
