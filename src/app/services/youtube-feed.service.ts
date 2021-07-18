import { Injectable } from '@angular/core';
// import {Http, Response} from "@angular/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeFeedService {

  constructor() {}

  // constructor(private http: Http) {}

  // getUser() {
  //   return this.http.get('/api/user')
  //     .map((res: Response) => res.json().response);
  // }

  // getUser(): Observable<User[]> {
  //   return this.http.get('/api/user')
  //     .map((res: Response) => res.json().response.map((user: User) => new User().deserialize(user)));
  // }
}
