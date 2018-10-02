import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'News Org';
  restItems: any;
  restItemsUrl = 'https://newsapi.org/v2/everything?' +
    'q="UIC"&' +
    'from=2018-09-03&' +
    'sortBy=relevancy&' +
    'language=en&' +
    'apiKey=79c1d6b1566a48bfa429fb58a6cb6a29';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getRestItems();
  }

  // Read all REST Items
  getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log(this.restItems);
        }
      )
  }

  // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));

  }

  selectedTitle: any;
  onSelect(article: any): void {
    this.selectedTitle = article;
  }
}