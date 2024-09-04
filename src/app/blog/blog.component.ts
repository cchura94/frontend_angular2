import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  http = inject(HttpClient)
  publicaciones: any[] = []

  constructor(){
    this.getBlogs()
  }

  getBlogs(){
    this.http.get('https://dev.to/api/articles').subscribe(
      (res: any) => {
        this.publicaciones = res
      }
    )
  }

}
