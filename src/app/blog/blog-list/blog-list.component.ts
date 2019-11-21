import { Component, OnInit } from "@angular/core";
import { Blog } from "../blog";
import { BlogDetail } from '../blog-detail';
import { BlogService } from "../blog.service";
@Component({
  selector: "blog-list",
  templateUrl: "./blog-list.component.html",
  styleUrls: ['./blog-list.component.css']
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
  buscar(){
    
      var input, filter, listas, tr, td, i, txtValue;
      
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      listas = document.getElementById("listas");
      tr = listas.getElementsByTagName("table");
      
    
      // Loop through all table rows, and hide those who don't match the search query
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