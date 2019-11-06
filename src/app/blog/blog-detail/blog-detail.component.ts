import { OnInit, OnChanges, Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlogService } from '../blog.service';

import { BlogDetail } from '../blog-detail';
import { Blog } from '../blog';
import { BlogComentariosComponent } from '../blog-comentarios/blog-comentarios.component';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit, OnChanges {
@Input() blogDetail: BlogDetail;
  public isCollapsed = true;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {
  }

  blog_id: number;
@ViewChild(BlogComentariosComponent, {static: true}) comentariosComponent: BlogComentariosComponent;
  getBlogDetail(): void {
    this.blogService.getBlogDetail(this.blog_id)
      .subscribe(blogDetail => {
        this.blogDetail = blogDetail
      });
  }
  getBlogComentarios(): void {
    console.log("getBlogComentarios :" + this.blogDetail.id);
    this.comentariosComponent.getComentarios(this.blogDetail.id);
    this.toggleComentarios();
  }

  toggleComentarios(): void {

    this.comentariosComponent.isCollapsed = !this.comentariosComponent.isCollapsed;
  }
  

  ngOnInit() {
    this.comentariosComponent.isCollapsed  = true;
  }

  ngOnChanges() {
    this.comentariosComponent.isCollapsed  = true;
  }


}