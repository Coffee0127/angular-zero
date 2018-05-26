import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './layout/main/main.component';
import { EditorComponent } from './layout/posts/editor/editor.component';
import { PostComponent } from './layout/posts/post/post.component';
import { PostsComponent } from './layout/posts/posts/posts.component';
import { AuthComponent } from './login/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full'
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'posts/:id',
        component: PostComponent
      },
      {
        path: 'create',
        component: EditorComponent
      }
    ]
  },
  {
    path: 'login',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
