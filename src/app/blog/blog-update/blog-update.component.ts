import { Component, Input, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Blog } from '../blog';
import { BlogDetail } from '../blog-detail';

@Component({
  selector: 'app-blog-update',
  templateUrl: './blog-update.component.html',
  styleUrls: ['./blog-update.component.css']
})
export class BlogUpdateComponent implements OnInit{
    blogForm: FormGroup;
    @Input() blogDetail: BlogDetail;
    blog_id: number;
    blogs: Blog[];
    constructor( private route: ActivatedRoute,private formBuilder: FormBuilder, private blogService: BlogService, private toastr: ToastrService) {   
        this.blog_id = route.snapshot.params['id']; 
        this.blogs=[];      
        this.blogForm = this.formBuilder.group({
          titulo: [""],
          texto: [""],
          rutaImagen: [""],
          rutaVideo: [""],
      });
    }
    showSuccess() {
        this.toastr.success("Blog", "Editado exitosamente!", {"progressBar": true,timeOut:1500});
        location.reload();
      }
    getBlogDetail(): void {
        this.blogService.getBlogDetail(this.blog_id)
          .subscribe(blogDetail => {
            this.blogDetail = blogDetail;
            this.blogForm = this.formBuilder.group({
              titulo: [this.blogDetail.titulo],
              texto: [this.blogDetail.texto],
              rutaImagen: [this.blogDetail.rutaImagen],
              rutaVideo: [this.blogDetail.rutaVideo],
          });
          });
      }
    ngOnInit() {
      this.getBlogDetail();
    }
    updateBlog(nuevoBlog: Blog){
      nuevoBlog.id=this.blog_id;
      this.blogService.updateBlog(nuevoBlog).subscribe((blog:Blog) =>{
          this.blogs.push(blog);
          this.showSuccess();
      });

      this.blogForm.reset();
      
  }
}