import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MemeApiResponse } from '../models/meme-api-response';
import { PostModel } from '../models/post-model';
import { MemeGeneraterService } from './meme-generater.service';
import { YoutubeFeedService } from './youtube-feed.service';

@Injectable({
  providedIn: 'root'
})
export class PostsFeederService {

  private videosSubject: Subject<PostModel> = new Subject<PostModel>();
  private memeSubject: Subject<PostModel> = new Subject<PostModel>();

  constructor(private youtubeFeedService: YoutubeFeedService,
    private memeGeneraterService: MemeGeneraterService
    ) { 
  }

  getVideosPosts(type: string): Observable<PostModel> {
    return this.videosSubject.asObservable();
  }

  public pushYotubeVideos(){
    const postModel = new PostModel();
    postModel.data = 'tyes';
    this.videosSubject.next(postModel);
  }

  getMemePosts() : Observable<PostModel> {
    return this.memeSubject.asObservable();
  }

  pushMemesPosts() {
    this.memeGeneraterService.pushMemesPosts(this.memeSubject);
  }

}
