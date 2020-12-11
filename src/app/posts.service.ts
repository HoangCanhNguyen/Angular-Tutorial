import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Post[] = [];
  private post: Post;
  constructor() { }

  onAddPost(title: string, content: string) {
    this.post = {
      title: title,
      content: content
    }
    this.posts.push(this.post)
    console.log(this.posts);
    
  }

  onGetPosts() {
    return [...this.posts]
  }
}
