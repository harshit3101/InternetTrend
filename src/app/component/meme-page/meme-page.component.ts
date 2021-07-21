import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostModel } from 'src/app/models/post-model';
import { MemeGeneraterService } from 'src/app/services/meme-generater.service';

@Component({
  selector: 'app-meme-page',
  templateUrl: './meme-page.component.html',
  styleUrls: ['./meme-page.component.scss']
})
export class MemePageComponent implements OnInit, OnDestroy {

  public memePosts: PostModel[] = [];
  private memeFeedSubscription: Subscription;

  constructor(private memeGeneraterService: MemeGeneraterService) {
    this.subscribeToMemes();
   }

  ngOnInit(): void {
  }

  private subscribeToMemes() {
    const nextObsever = (postModel: PostModel) => {
      this.memePosts.push(postModel);
    };

    const errorObsever = () => {
      console.log("error in subscribeToMemes ");
    }
  
    this.memeFeedSubscription = this.memeGeneraterService
          .getMemePosts()
          .subscribe(nextObsever, errorObsever);
          
    this.pushMemes();
  }
  

  pushMemes() {
    this.memeGeneraterService.pushMemesPosts();
  }

  @HostListener('window:scroll', ['$event']) 
  scrollHandler() {
    console.debug("Scroll Event");
    
    //In chrome and some browser scroll is given to body tag
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    if(pos == max )   {
      //Do your action here
      console.debug("ReAched bottom");
      this.pushMemes();
    }
        
  }
      
  ngOnDestroy(): void {
    this.memeFeedSubscription.unsubscribe();
  }
}