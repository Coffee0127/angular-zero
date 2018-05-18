import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  counter = 0;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.run();

    setTimeout(() => {
      this.counter++;
    }, 2000);
  }

}
