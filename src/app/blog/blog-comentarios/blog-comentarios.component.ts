import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../blog.service';
import { Comentario } from '../comentario';

@Component({
  selector: 'blog-comentarios',
  templateUrl: './blog-comentarios.component.html',
  styleUrls: ['./blog-comentarios.component.css']
})
export class BlogComentariosComponent implements OnInit {

  constructor(private blogService: BlogService) { }


  @Input() comentario: Comentario;
  isCollapsed: boolean = true;
  
  ngOnInit() {
    if (this.comentario == undefined)
     this.comentario = new Comentario();
  }


  getComentarios(idBlog: number): void {
    console.log("getComentarios " + idBlog);
    this.blogService.getBlogComentarios(idBlog)
      .subscribe(h => {
        this.comentario = h
      });
  }
}