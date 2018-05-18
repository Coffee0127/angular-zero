import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  counter = 0;
  data$: Observable<any>;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.run();

    setTimeout(() => {
      this.counter++;
    }, 2000);

    this.data$ = this.dataService.getData();
  }

  doDelete(item) {
    // this.dataService.doDelete(item)
    //   .subscribe(result => {
    //     this.data = this.data.filter(v => v.id !== item.id);
    //   }, error => {
    //     console.log(error);
    //   });
  }

  doModify(post: any) {
    // this.dataService.doModify(post)
    //   .subscribe(result => {
    //     this.data = this.data.map(item => {
    //       if (item.id === post.id) {
    //         // 避免此種寫法!
    //         // item.title = post.title;
    //         return Object.assign({}, item, post);
    //       }
    //       return item;
    //     });
    //   }, error => {
    //     console.log(error);
    //   });
  }

}
