import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css']
})
export class ArticleHeaderComponent implements OnInit, OnChanges {

  @Input()
  item;

  orignalItem;

  @Output()
  delete = new EventEmitter<any>();

  @Output()
  titleChanged = new EventEmitter<any>();

  isEdit = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.item) {
      this.orignalItem = changes.item.currentValue;
      this.item = Object.assign({}, changes.item.currentValue);
    }
  }

  deleteArticle() {
    this.delete.emit(this.item);
  }

  doEdit() {
    this.titleChanged.emit(this.item);
  }

  doCancel() {
    this.item = Object.assign({}, this.orignalItem);
    this.isEdit = false;
  }

}
