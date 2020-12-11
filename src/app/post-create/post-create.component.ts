import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent implements OnInit {
  postForm: FormGroup;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
    });
  }
  onSubmit() {
    this.postsService.onAddPost(
      this.postForm.value['title'],
      this.postForm.value['content']
    );
    this.postForm.reset()
  }
}
