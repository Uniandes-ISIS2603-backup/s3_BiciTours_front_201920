import { Component, OnInit } from "@angular/core";
import { Blog } from "../../blog/blog";
import { BlogDetail } from '../../blog/blog-detail';
import { BlogService } from "../../blog/blog.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "blog-list-usuario",
  templateUrl: "./blog-list-usuario.component.html",
  styleUrls: ['./blog-list-usuario.component.css']
})
export class BlogListUsuarioComponent implements OnInit {

  constructor(private blogService: BlogService, private route: ActivatedRoute) {
  }
  blog_id : number;
  usuario_id : number;
  selectedBlog: BlogDetail;
  blogs: Blog[];
  
   onSelected(blog_id: number): void {
    this.blog_id = blog_id;
    this.selectedBlog = new BlogDetail();
    this.blogService.getBlogDetail(blog_id).subscribe(o => this.selectedBlog = o);
  }
  getBlogs(): void {
    this.blogService.getBlogsUsuario(this.usuario_id).subscribe(blogs => (this.blogs = blogs));
  }

  ngOnInit() {
    console.log(window.location.pathname.split('/')[2])
    this.usuario_id = parseInt(window.location.pathname.split('/')[2]);
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
    console.log(td)
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