export interface Video {
  etag: string;
  id: {
    kind: string,
    videoId: string
  };
  kind: string;
  snippet: {
    publishedAt: string,
    channelId: string,
    channelTitle: string,
    description: string,
    liveBroadcastContent: string,
    thumbnails: {
      default: { url: string, width: number, height: number }
      high: { url: string, width: number, height: number }
      medium: {
        url: string, width: number, height: number
      }
    },
    title: string
  };
}
