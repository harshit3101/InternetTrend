import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiEndpoints } from '../constants/api-endpoints';
import { MyConstants } from '../constants/my-constants';
import { AbstractExternalEndpointsService } from '../interfaces/abstract/abstract-external-endpoints-service';
import { MemeApiResponse } from '../models/meme-api-response';
import { PostModel } from '../models/post-model';

@Injectable({
  providedIn: 'root'
})
export class MemeGeneraterService extends AbstractExternalEndpointsService<MemeApiResponse, PostModel> {

  private readonly randomMemeSubject: Subject<PostModel>  = new Subject<PostModel>();

  constructor(private http: HttpClient) { 
    super(http);
  }

  getMemePosts() : Observable<PostModel> {
    return this.getMySubject("RandomMeme").asObservable();
  }

  pushMemesPosts() {
    let apiEndpoint: string =  ApiEndpoints.MEME_API_HEREOKU;
    this.pushPost("RandomMeme", apiEndpoint, MyConstants.GET, "");
  }
  
  getMySubject(apiType: string): Subject<PostModel> {
    if(apiType === "RandomMeme"){
      return this.randomMemeSubject;
    }

    return this.randomMemeSubject;
  }

  myOnNextObserver(res: MemeApiResponse, apiType: string): void {
    const postModel = new PostModel(apiType);
    postModel.url = res.url;

    this.getMySubject(apiType).next(postModel);
  }

  
}
