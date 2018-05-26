import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { PostsModule } from './posts/posts.module';

@NgModule({
  imports: [
    CommonModule,
    PostsModule
  ],
  declarations: [ NavComponent, FooterComponent ],
  exports: [ NavComponent, FooterComponent ]
})
export class LayoutModule { }
