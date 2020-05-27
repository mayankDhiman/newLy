import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  title = 'newly-frontend';
  articles = [{title: 'The Hindu', link: "/here", description: "No Description"}, {title: 'The Tribune', link: "/here", description: "No Data"}];
  
  constructor(private api: ApiService) {
    this.getArticles();
  }

  getArticles = () => {
    this.api.getAllArticles().subscribe(
      data => {
        this.articles = data;
      },
      error => {
        console.log(error)
      }
    )
  }

}
