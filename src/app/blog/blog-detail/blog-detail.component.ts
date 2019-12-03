import { OnInit, Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { BlogService } from '../blog.service';
import { BlogDetail } from '../blog-detail';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
@Input() blogDetail: BlogDetail;

  constructor(
    route: ActivatedRoute,
    private blogService: BlogService,
    public domSanitizer: DomSanitizer,
  ) {
    this.blog_id = route.snapshot.params['id'];
  }

  blog_id: number;
  getBlogDetail(): void {
    this.blogService.getBlogDetail(this.blog_id)
      .subscribe(blogDetail => {
        this.blogDetail = blogDetail
        if(this.blogDetail.rutaVideo=="")
        {
          document.getElementById("video").style.display="none";
        }
      });
  }
  
  ngOnInit() {
    this.getBlogDetail();
    
  }
  videoURL() {
    return this.domSanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+this.getId(this.blogDetail.rutaVideo));
  }
  getId(url: string) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }
}
}