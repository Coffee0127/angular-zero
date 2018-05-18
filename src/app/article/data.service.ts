import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get('/api/articles.json');
  }

  run() {
    console.log('DataService');
  }

  doDelete(item) {
    return this.http.delete('/api/articles/' + item.id);
  }

  doModify(post: any) {
    return this.http.put('/api/articles/' + post.id, post);
  }

}
