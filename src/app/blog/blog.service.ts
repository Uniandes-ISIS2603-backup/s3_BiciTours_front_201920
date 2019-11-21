import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from './blog';
import { BlogDetail } from './blog-detail';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/s3_bicitours-api/api';
const blogs = "/blogs";

@Injectable()
export class BlogService {

  todos: Blog[];
  uno: Blog;

  constructor(private http: HttpClient) { }

  getBlogs() : Observable<Blog[]> {
        return this.http.get<Blog[]>(API_URL + blogs);
    }

  getBlogDetail(blogId:number): Observable<BlogDetail> {
    return this.http.get<BlogDetail>(API_URL + blogs+"/"+blogId);
  }    

  createBlog(blog: Blog) {
    return  this.http.post(API_URL + blogs, blog);
  }

  updateBlog(blog: Blog) {
    return  this.http.put(API_URL + blogs+"/"+blog.id, blog);
  }
}