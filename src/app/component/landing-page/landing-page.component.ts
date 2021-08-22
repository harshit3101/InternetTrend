import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostModel } from 'src/app/models/post-model';
import { InspirationalQuoteService } from 'src/app/services/inspirational-quote.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public quote: string;
  private inspirationalQuoteSubscription: Subscription;

  constructor(private inspirationalQuoteService: InspirationalQuoteService) { 
    this.subscribeToInspirationalQuote();
  }

  ngOnInit(): void {
  }

  private subscribeToInspirationalQuote() {
    const nextObsever = (postModel: PostModel) => {
      console.log("nextObsever for subscribeToInspirationalQuote called");
      this.quote = postModel.data;
    };

    const errorObsever = () => {
      console.log("error in subscribeToInspirationalQuote ");
    }
  
    this.inspirationalQuoteSubscription = this.inspirationalQuoteService
          .getInspirationalQuotePosts()
          .subscribe(nextObsever, errorObsever); 
          
    this.getInspirationalQuotePosts();
  }
  

  getInspirationalQuotePosts() {
    this.inspirationalQuoteService.pushInspirationalQuotePosts();
  }

  ngOnDestroy(): void {
    this.inspirationalQuoteSubscription.unsubscribe();
  }

}
