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


    let;
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/text',
            'X-Requested-With' : 'XMLHttpRequest',
        })
    };

    /*
return this.http.get<User[]>('http://127.0.0.1:8000/api/get-details');
*/


    dropDown(user: User) {

        //return drop;
        return this.http.post(this.url + '/api/rtn/', user);
    }

    getStream() {
        return this.http.get(this.url + '/api/stream');
    }

    getAll() {
        return this.http.get<DynamicForm<any>[]>(this.url + '/api/user');
    }

    getById(id: number) {
        return this.http.get(this.url + '/api/users/' + id);
    }

    create(user: User) {
        return this.http.post(this.url + '/api/rtn', user);
    }

    update(user: User) {
        return this.http.put(this.url + '/api/users/' + user.id, user);
    }

    delete(id: number) {
    }

    getQuestions() {
        return this.http.get(this.url + '/api/plan');

    }


    onUpload(e) {
        console.log(e);

    }
}
