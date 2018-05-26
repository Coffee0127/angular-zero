import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  postData = new FormGroup({
    // 透過 FormControl 建構子給定初始值
    title: new FormControl('Title....', Validators.required),
    body: new FormControl(null, [ Validators.required, Validators.minLength(10) ]),
    tags: new FormArray([
      new FormControl('Angular'),
      new FormControl('HTML')
    ])
  });

  get title(): FormControl {
    return <FormControl> this.postData.get('title');
  }

  get body(): FormControl {
    return <FormControl> this.postData.get('body');
  }

  get tags(): FormArray {
    return <FormArray> this.postData.get('tags');
  }

  constructor() { }

  ngOnInit() {
    console.log(this.postData.get('title').value);
  }

  addTag(tag: string) {
    if (tag) {
      this.tags.push(new FormControl(tag));
    }
  }

  removeTag(index: number) {
    this.tags.removeAt(index);
  }

  createPost() {
    console.log(this.postData.value);
  }

}
