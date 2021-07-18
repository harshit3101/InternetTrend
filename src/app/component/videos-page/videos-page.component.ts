import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostModel } from 'src/app/models/post-model';
import { PostsFeederService } from 'src/app/services/posts-feeder.service';
import { MyConstants } from 'src/app/constants/my-constants';

@Component({
  selector: 'app-videos-page',
  templateUrl: './videos-page.component.html',
  styleUrls: ['./videos-page.component.scss'],
  providers: [PostsFeederService]
})
export class VideosPageComponent implements OnInit, OnDestroy {

  public videoPosts: PostModel[] = [];
  private videoFeedSubscription: Subscription;

  mydata: string = 'this is me';

  constructor(private postsFeeder: PostsFeederService) {
    this.subscribeToVides();
   }

  ngOnInit(): void {
  }
    
  ngOnDestroy(): void {
    this.videoFeedSubscription.unsubscribe();
  }

  private subscribeToVides() {
    const nextObsever = (postModel: PostModel) => {
      console.log("nextObsever"+ postModel.data);
      this.videoPosts.push(postModel);
    };

    const errorObsever = () => {
      console.log("error in here ");
    }
  
    this.videoFeedSubscription = this.postsFeeder
          .getVideosPosts(MyConstants.YOUTUBE_VIDEO)
          .subscribe(nextObsever, errorObsever);

    this.postsFeeder.pushYotubeVideos();
  }


}
