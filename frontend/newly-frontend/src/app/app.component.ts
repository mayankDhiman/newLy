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
  articles = [{title: 'Good News', author: 'Hindustan Times', link: "/here", summary: "No Description"}];
  
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

  filter = { ht: true, nyt: true, bbc: true, redt: true};
  filteredArticles = this.articles;

  filterChange() {
    this.filteredArticles = this.articles.filter(x => 
       (x.author === 'New York Times' && this.filter.nyt)
       || (x.author === 'Hindustan Times' && this.filter.ht)
       || (x.author === 'BBC' && this.filter.bbc)
       || (x.author === 'Reddit' && this.filter.redt)
    );
  }

}
