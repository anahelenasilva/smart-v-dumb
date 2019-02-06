import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-view-repos',
  templateUrl: './view-repos.component.html',
  styleUrls: ['./view-repos.component.scss']
})
export class ViewReposComponent implements OnInit {

  list: Observable<any[]>

  constructor(http: HttpClient) { 
    const path = 'https://api.github.com/search/repositories?q=angular';

    this.list = http.get<{ items: any[] }>(path)
        .pipe(
          map(data => data.items)
        );
  }

  ngOnInit() {
  }

}
