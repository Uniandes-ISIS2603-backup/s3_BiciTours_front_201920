import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import {BlogService} from '../blog.service';
import {Blog} from '../blog';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
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
}