import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogService } from './blog.service';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogRoutingModule } from './blog-routing.module';
import { ComentarioModule } from '../comentario/comentario.module';

@NgModule({
  imports: [
    CommonModule, BlogRoutingModule, ReactiveFormsModule, ComentarioModule
  ],
  declarations: [BlogListComponent, BlogDetailComponent, BlogCreateComponent], 
  exports: [BlogListComponent, BlogCreateComponent],
  providers: [BlogService]
})
export class BlogModule { }