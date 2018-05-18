import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { JournalEntriesService } from '../services/journalentries.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-journal-details',
  templateUrl: './journal-details.component.html',
  styleUrls: ['./journal-details.component.css']
})
export class JournalDetailsComponent implements OnInit {

  theJournal: any = {};

  constructor(private myService: JournalEntriesService,
    private route: ActivatedRoute) { }

  getTheJournal(id) {
    this.myService.getSingleJournal(id)
      .subscribe(res => {
        this.theJournal = res;
      });
  }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        const id = params['id'];
        this.getTheJournal(id);
      });

  }

}
