import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiEndpoints } from '../constants/api-endpoints';
import { MyConstants } from '../constants/my-constants';
import { AbstractExternalEndpointsService } from '../interfaces/abstract/abstract-external-endpoints-service';

import { PostModel } from '../models/post-model';
import { RandomFoodApiResponse } from '../models/random-food-api-response';

@Injectable({
  providedIn: 'root'
})
export class RandomFoodDishesService extends AbstractExternalEndpointsService<RandomFoodApiResponse, PostModel> {
  
  private readonly randomFoodDishSubject: Subject<PostModel> = new Subject<PostModel>();
  private readonly categoryFoodDishSubject: Subject<PostModel> = new Subject<PostModel>();

  constructor(private http: HttpClient) { 
    super(http);
  }

  getRandomFoodPosts() : Observable<PostModel> {
    return this.getMySubject("RandomFoodDish").asObservable();
  }

  pushRandomFoodPosts() {
    let apiEndpoint: string =  ApiEndpoints.RANDOM_FOOD_DISHES_API_HEREOKU;
    this.pushPost("RandomFoodDish", apiEndpoint, MyConstants.GET, "");
  }

  getCategoryFoodPosts() : Observable<PostModel> {
    return this.getMySubject("CategoryFoodDish").asObservable();
  }

  pushCategoryFoodPosts(data: string) {
    let apiEndpoint: string =  ApiEndpoints.CATEGORY_FOOD_DISHES_API_HEREOKU + '/' + data.toLowerCase();
    console.log("Harshit test endpoint"+ apiEndpoint);
    this.pushPost("CategoryFoodDish", apiEndpoint, MyConstants.GET, "");
  }

  getMySubject(apiType: string): Subject<PostModel> {
    if(apiType === "RandomFoodDish") {
      return this.randomFoodDishSubject;
    }else if(apiType === "CategoryFoodDish") {
      return this.categoryFoodDishSubject;
    }

    return this.randomFoodDishSubject;
  }

  myOnNextObserver(res: RandomFoodApiResponse, apiType: string): void {
    const postModel = new PostModel(apiType);
    postModel.url = res.image;

    this.getMySubject(apiType).next(postModel);
  }

}
