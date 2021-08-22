import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiEndpoints } from '../constants/api-endpoints';
import { MyConstants } from '../constants/my-constants';
import { AbstractExternalEndpointsService } from '../interfaces/abstract/abstract-external-endpoints-service';
import { AffirmationApiResponse } from '../models/affirmation-api-response';
import { PostModel } from '../models/post-model';

@Injectable({
  providedIn: 'root'
})
export class InspirationalQuoteService extends AbstractExternalEndpointsService<AffirmationApiResponse, PostModel> {

  private readonly inspirationalQuoteSubject: Subject<PostModel>  = new Subject<PostModel>();

  constructor(private http: HttpClient) {
    super(http);
  }

  getInspirationalQuotePosts() : Observable<PostModel> {
    return this.getMySubject("inspirationalQuote").asObservable();
  }

  pushInspirationalQuotePosts() {
    let apiEndpoint: string =  ApiEndpoints.INSPIRATIONAL_QUOTE_API;
    this.pushPost("inspirationalQuote", apiEndpoint, MyConstants.GET, "");
  }

  getMySubject(apiType: string): Subject<PostModel> {
    if(apiType === "inspirationalQuote"){
      return this.inspirationalQuoteSubject;
    }

    return this.inspirationalQuoteSubject;
  }

  myOnNextObserver(res: AffirmationApiResponse, apiType: string): void {
    const postModel = new PostModel(apiType);
    postModel.data = res.affirmation;

    this.getMySubject(apiType).next(postModel);
  }
}
