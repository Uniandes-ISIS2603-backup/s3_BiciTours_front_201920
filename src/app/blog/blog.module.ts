import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module';

import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogService } from './blog.service';
import { BlogComentariosComponent } from './blog-comentarios/blog-comentarios.component';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule, NgbModule
  ],
  declarations: [BlogListComponent, BlogDetailComponent, BlogComentariosComponent],
  exports: [BlogListComponent],
  providers: [BlogService]
})
export class BlogModule { }