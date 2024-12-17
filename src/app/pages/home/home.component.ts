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
  constructor(private homeService: HomeserviceService) {}

  ngOnInit(): void {
    this.fetchPostData();
  }

  private fetchPostData(): void {
    this.homeService.getPostData().subscribe((data: Post[]) => {
      this.postData = data;
    });
  }
}
