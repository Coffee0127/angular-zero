import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  postData = new FormGroup({
    // 透過 FormControl 建構子給定初始值
    title: new FormControl('Title....'),
    body: new FormControl(),
    tags: new FormArray([
      new FormControl('Angular'),
      new FormControl('HTML')
    ])
  });

  get tags(): FormArray {
    return <FormArray> this.postData.get('tags');
  }

  constructor() { }

  ngOnInit() {
    console.log(this.postData.get('title').value);
  }

}
