import { Injectable } from '@angular/core';
import { HomeapiserviceService } from './homeapiservice.service';
import { catchError, Observable, of } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {

  private postDataUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private apiService: HomeapiserviceService) { }
  
  getPostData(): Observable<Post[]> {
    return this.apiService.get<Post[]>(this.postDataUrl).pipe(
      catchError((err) =>{
        console.error('Error fetching posts data',err);
        return of([]);
      })
    );
  }
}
