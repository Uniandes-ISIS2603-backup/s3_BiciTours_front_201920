import { OnInit, Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
//import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

import {BlogService} from '../blog.service';
import {Blog} from '../blog';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent{
    /**blogForm: FormGroup;
    constructor(
        private blogService: BlogService,
        private formBuilder: FormBuilder,
//       private toastrService: ToastrService,
        private router: Router
    ) {    
        this.blogForm = this.formBuilder.group({
        titulo: ["", [Validators.required, Validators.minLength(5)]],
        texto: [""],
        rutaImagen: [""],
        rutaVideo: [""],
    });
    }
    blog:Blog;
    /postBlog(blogN): Blog {
        this.blogService.postBlog(this.blog)
            .subscribe(blog => {
                this.blog.id = blogN.id;
                this.router.navigate(['/blogs/' + blogN.id]);
            }, err => {
//                this.toastrService.error(err, 'Error');
            });
        return this.blog;
    }
    cancelCreation(): void {
    //    this.toastrService.warning('The blog wasn\'t created', 'Blog creation');
        this.router.navigate(['/blogs']);
    }
    ngOnInit() {
        this.blog = new Blog();
    }*/
}