import { OnInit, Component, Input, ViewChild } from '@angular/core';
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
export class BlogDetailComponent implements OnInit {
@Input() blogDetail: BlogDetail;
  public blog: Blog;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {
    this.blog_id = route.snapshot.params['id'];
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
    this.comentariosComponent.getComentarios(this.blogDetail.id);
  }
  
  ngOnInit() {
    this.getBlogDetail();
  }
}