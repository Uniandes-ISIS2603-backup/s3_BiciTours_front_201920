import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from './blog';
import { BlogDetail } from './blog-detail';
import { Observable } from 'rxjs';
import { Comentario } from './comentario';
import { map } from 'rxjs/operators';

const API_URL = 'http://localhost:8080/s3_bicitours-api/api';
const blogs = "/blogs";

@Injectable()
export class BlogService {

  constructor(private http: HttpClient) { }

  getBlogs() : Observable<Blog[]> {
        return this.http.get<Blog[]>(API_URL + blogs);
    }
    todos: Blog[];
    uno: Blog;
    getBlogDetail(blogId): Observable<BlogDetail> {
    return this.http.get<BlogDetail[]>(API_URL + blogs).pipe(map(todos => todos.find(uno => uno.id==blogId)));
  }    
    getBlogComentarios(blogId: number): Observable<Comentario> {
    return this.http.get<Comentario>(API_URL + blogs);
  }

  postBlog(blog: Blog) {
    return  this.http.post(API_URL + blogs, blog);
  }
}