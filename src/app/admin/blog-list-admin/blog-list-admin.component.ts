import { Component, OnInit } from "@angular/core";
import { Blog } from "../../blog/blog";
import { BlogDetail } from '../../blog/blog-detail';
import { BlogService } from "../../blog/blog.service";

@Component({
  selector: "blog-list-admin",
  templateUrl: "./blog-list-admin.component.html",
  styleUrls: ['./blog-list-admin.component.css']
})
export class BlogListAdminComponent implements OnInit {

  constructor(private blogService: BlogService) {}
  click: boolean;
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
    this.click=false;
  }
  showDiv() {
    if(this.click){
      document.getElementById('welcomeDiv').style.display = "none";
    }
    else{
      document.getElementById('welcomeDiv').style.display = "block";
    }
    
    this.click=!this.click;
 }

}