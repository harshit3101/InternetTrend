import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PostModel } from '../models/post-model';
import { YoutubeFeedService } from './youtube-feed.service';

@Injectable({
  providedIn: 'root'
})
export class PostsFeederService {

  private videosSubject: Subject<PostModel> = new Subject<PostModel>();

  constructor(
    private youtubeFeedService: YoutubeFeedService
    ) {}

  getVideosPosts(type: string): Observable<PostModel> {
    return this.videosSubject.asObservable();
  }

  pushYotubeVideos() {
    const postModel = new PostModel();
    postModel.data = 'tyes';
    this.videosSubject.next(postModel);
  }

  

}
