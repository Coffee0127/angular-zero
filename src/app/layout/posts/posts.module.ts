import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EditorComponent } from './editor/editor.component';
import { PostComponent } from './post/post.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PostsRoutingModule
  ],
  declarations: [ PostComponent, PostsComponent, EditorComponent ]
})
export class PostsModule { }