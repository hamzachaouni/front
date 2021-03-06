import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  
  constructor(private url: string,private http: Http) { }

  getAll() {
    return this.http.get(this.url)
    .map(response => response.json())
    
  }

  create(resource) {
    return this.http.post(this.url, resource)
    .map(response => response.json())
    
  }

  update(resource) {
    return this.http.put(this.url+'/'+ resource.id, resource)
    .map(response => response.json())
   
  }

  delete(resource) {
    return this.http.delete(this.url+'/'+ resource.id)
    .map(response => response.json())
          
  }




}
