import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit, OnChanges {

  @Input() set video(video) {
    if (video) {
      this.videoDetail = `https://www.youtube.com/embed/${video.id.videoId}`;
      this.videoTitle = video.snippet.title;
      this.videoDescr = video.snippet.description;
    }
  }

  videoDetail;
  videoTitle;
  videoDescr;

  constructor(
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
