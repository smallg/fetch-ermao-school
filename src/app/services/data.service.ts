import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getSchools() {
    let headers = new HttpHeaders();
    headers.set('cookie', 'JSESSIONID=2F43EF074F3C18122ED78E84EB93C7FA; SERVERID=bac2e5d18a662f8ce922d531450396f3|1621230432|1621230418')
    return this.http.get('https://gxxq.cdzk.org/school/loadSchools?schoolType=0&page=1&limit=100');
  }
}
