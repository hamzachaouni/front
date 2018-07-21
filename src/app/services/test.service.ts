import { DataService } from './data.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';



@Injectable()
export class TestService extends DataService {
  

  /*constructor(http: Http) {
    super('http://localhost:8000/api/type-qrcode', http)
   }*/
  
   constructor(http: Http) {
    super('http://localhost:8000/api/setting-qrcode', http)
   }
}
