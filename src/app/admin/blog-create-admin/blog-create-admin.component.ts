import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Blog } from "../../blog/blog";
import { BlogService } from "../../blog/blog.service";

@Component({
  selector: 'app-blog-create-admin',
  templateUrl: './blog-create-admin.component.html',
  styleUrls: ['./blog-create-admin.component.css']
})
export class BlogCreateComponent{
    blogForm: FormGroup;
    blogService: BlogService;
    blogs: Blog[];
    
    constructor(private formBuilder: FormBuilder, blogService: BlogService, private toastr: ToastrService) {   
        this.blogs=[];
        this.blogService = blogService; 
        this.blogForm = this.formBuilder.group({
        titulo: [""],
        texto: [""],
        rutaImagen: [""],
        rutaVideo: [""],
    });
    }
    createBlog(nuevoBlog: Blog){
        nuevoBlog.calificacionPromedio=10.0;
        nuevoBlog.id=null;
        this.blogService.createBlog(nuevoBlog).subscribe((blog:Blog) =>{
            this.blogs.push(blog);
            this.showSuccess();
        });

        this.blogForm.reset();
        
    }

    showSuccess() {
        this.toastr.success("Blog", "Creado exitosamente!", {"progressBar": true,timeOut:1500});
        location.reload();
      }
    gOnInit() {
        
    }
}