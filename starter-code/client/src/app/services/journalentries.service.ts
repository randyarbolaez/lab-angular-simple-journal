import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class JournalEntriesService {

  constructor(private myHttp: Http) { }

  getAllJournals() {
    return this.myHttp.get('http://localhost:3000/api/journal-entries')
      .map(res => res.json());
  }

  getSingleJournal(id) {
    return this.myHttp.get(`http://localhost:3000/api/journal-entries/${id}`)
      .map(res => res.json());
  }
}
