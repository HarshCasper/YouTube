import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {first, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ResponseYt} from './response-yt';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly baseURL = 'https://www.googleapis.com/youtube/v3';
  public videos;
  public video;

  constructor(public http: HttpClient) { }

  searchVideo(searchTerm: string): Observable<ResponseYt> {
    return this.http.get<ResponseYt>
    (`${this.baseURL}/search?q=${searchTerm}&part=snippet&maxResult=11&key=${environment.apiKey}`)
      .pipe(
        map(res => res)
      );
  }

  setSearchResult(videos) {
    this.videos = videos;
  }

  setFirstVideo(video) {
    this.video = video;
  }

}
