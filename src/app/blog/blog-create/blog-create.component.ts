import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BlogService } from '../blog.service';
import { Blog } from '../blog';
import { UsuarioService } from 'src/app/usuario/usuario.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent{
    blogForm: FormGroup;
    blogService: BlogService;
    blogs: Blog[];
    
    constructor(private formBuilder: FormBuilder, blogService: BlogService, private toastr: ToastrService, private usuarioService: UsuarioService) {   
        this.blogs=[];
        this.blogService = blogService; 
        this.blogForm = this.formBuilder.group({
        titulo: ["", [Validators.required,Validators.minLength(5), Validators.maxLength(50)]],
        texto: ["", [Validators.required,Validators.minLength(8), Validators.maxLength(255)]],
        rutaImagen: [""],
        rutaVideo: [""],
    });
    }
    createBlog(nuevoBlog: Blog){
        nuevoBlog.calificacionPromedio=0.0;
        nuevoBlog.id=null;
        this.usuarioService.getUsuario(parseInt(localStorage.getItem("id"))).subscribe(usuario => {nuevoBlog.creador=usuario
                if(!this.matchYoutubeUrl(nuevoBlog.rutaVideo))
        {
            nuevoBlog.rutaVideo="";
        }
        this.blogService.createBlog(nuevoBlog).subscribe((blog:Blog) =>{
            this.blogs.push(blog);
            this.showSuccess();
            window.history.back();
        });});


        this.blogForm.reset();
        
    }

    showSuccess() {
        this.toastr.success("Blog", "Creado exitosamente!", {"progressBar": true,timeOut:1500});
      }
      matchYoutubeUrl(url) {
        var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        var matches = url.match(p);
        if(matches){
            return matches[1];
        }
        return false;
    }
}