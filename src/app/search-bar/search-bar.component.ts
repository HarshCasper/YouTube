import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  q: string;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.appService.searchVideo(this.q).subscribe(it => {
      this.appService.setSearchResult(it.items);
      this.appService.setFirstVideo(it.items[0].id.kind !== 'youtube#channel' ? it.items[0] : it.items[1]);
    });
  }

}
