import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { User } from '../_models';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }
    
    

    getAll() {
        
        let httpOptions = {
            headers: new HttpHeaders({
            'Content-Type': 'application/text'
        }) 
        };

            return this.http.get<User[]>('http://127.0.0.1:8000/api/get-details',  httpOptions);
        }
}