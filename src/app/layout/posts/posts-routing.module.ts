import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditorComponent } from './editor/editor.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: 'create',
    component: EditorComponent
  },
  {
    path: ':id',
    component: PostComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PostsRoutingModule { }
