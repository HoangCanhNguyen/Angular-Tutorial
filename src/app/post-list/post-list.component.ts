import { Component, Input, OnInit } from '@angular/core';

import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  postList: Post[] = [];

  constructor() {}

  ngOnInit(): void {
    // this.postList.push(this.post)
  }

  onShowPosts() {
  }
}
