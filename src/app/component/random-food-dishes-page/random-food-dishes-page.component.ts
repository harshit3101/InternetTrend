import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostModel } from 'src/app/models/post-model';
import { RandomFoodDishesService } from 'src/app/services/random-food-dishes.service';


@Component({
  selector: 'app-random-food-dishes-page',
  templateUrl: './random-food-dishes-page.component.html',
  styleUrls: ['./random-food-dishes-page.component.scss']
})
export class RandomFoodDishesPageComponent implements OnInit, OnDestroy {

  public randomFoodDishPostLink: string;
  public dishName:string;
  private randomFoodDishSubscription: Subscription;

  constructor(private randomFoodDishesService: RandomFoodDishesService) {
    this.subscribeToRandomFoodDishes();
   }

  ngOnInit(): void {
  }

  private subscribeToRandomFoodDishes() {
    const nextObsever = (postModel: PostModel) => {
      console.log("nextObsever for subscribeToRandomFoodDishes called");
      this.randomFoodDishPostLink = postModel.url;
    };

    const errorObsever = () => {
      console.log("error in subscribeToRandomFoodDishes ");
    }
  
    this.randomFoodDishSubscription = this.randomFoodDishesService
          .getRandomFoodPosts()
          .subscribe(nextObsever, errorObsever);
          
    this.getRandomFoodPosts();
  }
  

  getRandomFoodPosts() {
    this.randomFoodDishesService.pushRandomFoodPosts();
  }

  getSearchTextFoodPosts(){
    
  }

  @HostListener('window:scroll', ['$event']) 
  scrollHandler() {
    console.debug("Scroll Event");
    // this.pushMemes();
    
  }
      
  ngOnDestroy(): void {
    this.randomFoodDishSubscription.unsubscribe();
  }
}
