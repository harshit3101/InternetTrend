import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiEndpoints } from '../constants/api-endpoints';
import { AbstractExternalEndpointsService } from '../interfaces/abstract/abstract-external-endpoints-service';

import { PostModel } from '../models/post-model';
import { RandomFoodApiResponse } from '../models/random-food-api-response';

@Injectable({
  providedIn: 'root'
})
export class RandomFoodDishesService extends AbstractExternalEndpointsService<RandomFoodApiResponse, PostModel> {

  private readonly mySubject: Subject<PostModel>  = new Subject<PostModel>();

  constructor(private http: HttpClient) { 
    super();
  }

  getRandomFoodPosts() : Observable<PostModel> {
    return this.getMySubject().asObservable();
  }

  pushRandomFoodPosts() {
    this.pushPost();
  }

  callApi(): Observable<RandomFoodApiResponse> {
    return this.http.get<RandomFoodApiResponse>(ApiEndpoints.RANDOM_FOOD_DISHES_API_HEREOKU);
  }

  getModelType(): string {
    return 'RandomFoodDish';
  }
  
  getMySubject(): Subject<PostModel> {
    return this.mySubject;
  }

  myOnNextObserver(res: RandomFoodApiResponse): void {
    const postModel = new PostModel();
      postModel.url = res.image;
      postModel.type = this.getModelType();

      this.getMySubject().next(postModel);
  }

}
