import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { JournalEntriesService } from '../services/journalentries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.component.html',
  styleUrls: ['./journal-entry.component.css']
})
export class JournalEntryComponent implements OnInit {

  allTheJournals: Array<any> = [];

  constructor(private myService: JournalEntriesService,
    private route: Router) { }

  getAllTheJournals() {
    this.myService.getAllJournals()
      .subscribe(list => {
        this.allTheJournals = list;
      });
  }

  ngOnInit() {
    this.getAllTheJournals();
  }

}
