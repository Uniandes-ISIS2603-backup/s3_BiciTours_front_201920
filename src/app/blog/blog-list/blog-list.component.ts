import { Component, OnInit } from "@angular/core";
import { Blog } from "../blog";
import { BlogDetail } from '../blog-detail';
import { BlogService } from "../blog.service";
@Component({
  selector: "list-blog",
  templateUrl: "./blog-list.component.html",
})
export class BlogListComponent implements OnInit {

  constructor(private blogService: BlogService) {}

  blog_id : number;
  selectedBlog: BlogDetail;
  blogs: Blog[];
  
   onSelected(blog_id: number): void {
    this.blog_id = blog_id;
    this.selectedBlog = new BlogDetail();
    this.blogService.getBlogDetail(blog_id).subscribe(o => this.selectedBlog = o);
  }
  getBlogs(): void {
    this.blogService.getBlogs().subscribe(blogs => (this.blogs = blogs));
  }

  ngOnInit() {
    this.getBlogs();
  }

}