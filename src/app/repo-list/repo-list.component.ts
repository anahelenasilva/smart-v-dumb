import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepoListComponent implements OnInit {
  @Input() list: any[];
  
  constructor() { }

  ngOnInit() {
  }

}
