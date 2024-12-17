import { Injectable } from '@angular/core';
import { HomeapiserviceService } from './homeapiservice.service';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {

  private postDataUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private apiService: HomeapiserviceService) { }
  
  getPostData(): Observable<Post[]> {
    return this.apiService.get(this.postDataUrl);
  }
}
