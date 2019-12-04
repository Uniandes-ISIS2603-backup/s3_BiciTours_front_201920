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
 buscar(): void{
    
  var input, filter, listas, tr, td, i, txtValue, info;
  
  input = document.getElementById("buscar");
  filter = input.value.toUpperCase();
  listas = document.getElementById("listas");
  tr = listas.getElementsByTagName("div");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("th")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

}