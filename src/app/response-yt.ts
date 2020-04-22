import {Video} from './video';

export interface ResponseYt {
  etag: string;
  items: Array<Video>;
  kind: string;
  nextPageToken: string;
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  };
  regionCode: string;
}
