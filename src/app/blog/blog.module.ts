import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogService } from './blog.service';
import { BlogComentariosComponent } from './blog-comentarios/blog-comentarios.component';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  imports: [
    CommonModule, NgbModule, BlogRoutingModule
  ],
  declarations: [BlogListComponent, BlogDetailComponent, BlogComentariosComponent],
  exports: [BlogListComponent],
  providers: [BlogService]
})
export class BlogModule { }