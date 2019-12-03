import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogService } from './blog.service';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogRoutingModule } from './blog-routing.module';
import { ComentarioModule } from '../comentario/comentario.module';
import { BlogUpdateComponent} from './blog-update/blog-update.component';

@NgModule({
  imports: [
    CommonModule, BlogRoutingModule, ReactiveFormsModule, ComentarioModule
  ],
  declarations: [BlogListComponent, BlogDetailComponent, BlogCreateComponent, BlogUpdateComponent], 
  exports: [BlogListComponent, BlogCreateComponent, BlogUpdateComponent],
  providers: [BlogService]
})
export class BlogModule { }