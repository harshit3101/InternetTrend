import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiEndpoints } from '../constants/api-endpoints';
import { AbstractExternalEndpointsService } from '../interfaces/abstract/abstract-external-endpoints-service';
import { MemeApiResponse } from '../models/meme-api-response';
import { PostModel } from '../models/post-model';

@Injectable({
  providedIn: 'root'
})
export class MemeGeneraterService extends AbstractExternalEndpointsService<MemeApiResponse, PostModel>{

  private readonly mySubject: Subject<PostModel>  = new Subject<PostModel>();

  constructor(private http: HttpClient) { 
    super();
  }

  getMemePosts() : Observable<PostModel> {
    return this.getMySubject().asObservable();
  }

  pushMemesPosts() {
    this.pushPost();
  }


  callApi(): Observable<MemeApiResponse> {
    return this.http.get<MemeApiResponse>(ApiEndpoints.MEME_API_HEREOKU);
  }

  getModelType(): string {
    return 'Meme';
  }
  
  getMySubject(): Subject<PostModel> {
    return this.mySubject;
  }

  myOnNextObserver(res: MemeApiResponse): void {
      const postModel = new PostModel();
      postModel.url = res.url;
      postModel.type = 'Meme';
      this.mySubject.next(postModel);
  }

  
}