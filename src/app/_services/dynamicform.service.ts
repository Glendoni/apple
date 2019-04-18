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


    /*
       let httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/text'
    })
    };
    return this.http.get<User[]>('http://127.0.0.1:8000/api/get-details');
    */


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
        return this.http.delete(this.url + '/api/users/' + id);
    }

    getQuestions() {
        return this.http.get<DynamicForm<any>[]>(this.url + '/api/stream');

    }



    getQuestion() {
        //return this.http.get(this.url + '/api/stream');
        return [
            {
                type: 'text',
                name: 'firstName',
                label: 'First Name',
                value: 'when',
                required: true,
            },
            {
                type: 'text',
                name: 'lastName',
                label: 'Last Name',
                value: '',
                required: true,
            },
        ];
    }
    onUpload(e) {
        console.log(e);

    }
}
