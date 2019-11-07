import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from './blog';
import { BlogDetail } from './blog-detail';
import { Observable } from 'rxjs';
import { Comentario } from './comentario';

const API_URL = '../../assets/';
const blogs = "blogs.json";

@Injectable()
export class BlogService {

  constructor(private http: HttpClient) { }

  getBlogs() : Observable<Blog[]> {
        return this.http.get<Blog[]>(API_URL + blogs);
    }
    
  getBlogDetail(blogId): Observable<BlogDetail> {
    console.log(API_URL + "blog-" + blogId + ".json");
    return this.http.get<BlogDetail>(API_URL + "blog-" + blogId + ".json");
  }    
    getBlogComentarios(blogId: number): Observable<Comentario> {
    console.log(API_URL + "comentarios-" + blogId + ".json");
    return this.http.get<Comentario>(API_URL + "comentarios-" + blogId + ".json");
  }

  postBlog(blog: Blog) {
    return  this.http.post(API_URL + blogs, blog);
  }
}