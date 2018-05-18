import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data;

  constructor(private http: HttpClient) {
    this.http.get('/api/articles.json')
      .subscribe(result => {
        this.data = result;
      });
  }

  run() {
    console.log('DataService');
  }

  doDelete(item) {
    this.data = this.data.filter(v => v.id !== item.id);
  }

  doModify(post: any) {
    this.data = this.data.map(item => {
      if (item.id === post.id) {
        // 避免此種寫法!
        // item.title = post.title;
        return Object.assign({}, item, post);
      }
      return item;
    });
  }

}
