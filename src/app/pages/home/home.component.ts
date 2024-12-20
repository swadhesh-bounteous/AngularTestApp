import { Component } from '@angular/core';
import { Post } from '../../models/post';
import { HomeserviceService } from '../../services/homeservice.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] 
})
export class HomeComponent {
  postData: Post[] = [];
  errorMessage: string = '';  

  constructor(private homeService: HomeserviceService) {}

  ngOnInit(): void {
    this.fetchPostData();
  }

  private fetchPostData(): void {
    this.homeService.getPostData().subscribe({
      next: (data: Post[]) => {
        this.postData = data;
        console.log('Post data fetched successfully:', data); 
      },
      error: (err) => {
        this.errorMessage = 'An error occurred while fetching post data.';
        console.error('Error fetching post data:', err); 
      }
    });
  }
}
