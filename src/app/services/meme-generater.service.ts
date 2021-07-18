import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiEndpoints } from '../constants/api-endpoints';
import { MemeApiResponse } from '../models/meme-api-response';
import { PostModel } from '../models/post-model';

@Injectable({
  providedIn: 'root'
})
export class MemeGeneraterService {

  constructor(private http: HttpClient) { }

  private getMemes(): Observable<MemeApiResponse> {
    return this.http.get<MemeApiResponse>(ApiEndpoints.MEME_API_HEREOKU);
  }

  pushMemesPosts(memeSubject : Subject<PostModel>) {
    const nextObsever = ((res: MemeApiResponse) => {
      console.log('response received')
      console.log(res);
      const postModel = new PostModel();
      postModel.url = res.url;
      postModel.type = 'Meme';
      memeSubject.next(postModel);
    });

    const errorObserver = ((error: any) => {    
      console.error('Request failed with error')
      alert(error);
    });


    this.getMemes().subscribe(
      nextObsever,
      errorObserver
    )
  }

  
}
