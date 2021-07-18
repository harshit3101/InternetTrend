import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostModel } from 'src/app/models/post-model';
import { PostsFeederService } from 'src/app/services/posts-feeder.service';

@Component({
  selector: 'app-meme-page',
  templateUrl: './meme-page.component.html',
  styleUrls: ['./meme-page.component.scss']
})
export class MemePageComponent implements OnInit, OnDestroy {

  public memePosts: PostModel[] = [];
  private memeFeedSubscription: Subscription;

  mydata: string = 'this is me';

  constructor(private postsFeeder: PostsFeederService) {
    this.subscribeToMemes();
   }

  ngOnInit(): void {
  }

  private subscribeToMemes() {
    const nextObsever = (postModel: PostModel) => {
      console.log("nextObsever"+ postModel.url);
      this.memePosts.push(postModel);
    };

    const errorObsever = () => {
      console.log("error in subscribeToMemes ");
    }
  
    this.memeFeedSubscription = this.postsFeeder
          .getMemePosts()
          .subscribe(nextObsever, errorObsever);
          
    this.pushMemes();
  }
  

  pushMemes() {
    this.postsFeeder.pushMemesPosts();
  }

  @HostListener('window:scroll', ['$event']) 
  scrollHandler() {
    console.debug("Scroll Event");
    // this.pushMemes();
    
  }
      
  ngOnDestroy(): void {
    this.memeFeedSubscription.unsubscribe();
  }
}