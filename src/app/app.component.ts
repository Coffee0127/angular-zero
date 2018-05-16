import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  wordCounts = 0;

  constructor() {
  }

  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title = 'The Will Will Web';
    }
  }

  countWords($event: KeyboardEvent) {
    if ($event.keyCode === 27) {
      (<HTMLInputElement> $event.target).value = '';
      this.wordCounts = 0;
      return;
    }
    this.wordCounts = (<HTMLInputElement> $event.target).value.length;
  }
}
