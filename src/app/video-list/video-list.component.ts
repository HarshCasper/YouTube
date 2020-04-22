import {Component, Input, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {Video} from '../video';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  @Input() set videos(items) {
    if (items) {
      this.videoList = items;
    }
  }

  videoList = Array<Video>();

  constructor(
    public appService: AppService
  ) { }

  ngOnInit() {
  }

}
