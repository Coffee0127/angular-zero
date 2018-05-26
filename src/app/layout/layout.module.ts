import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { PostsModule } from './posts/posts.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PostsModule
  ],
  declarations: [ NavComponent, FooterComponent, MainComponent ],
  exports: [ NavComponent, FooterComponent ]
})
export class LayoutModule { }
