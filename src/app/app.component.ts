import { Component } from '@angular/core';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pratice1';
  createdPost: Post;
  addPost(event) {
    this.createdPost = event
  }
}
