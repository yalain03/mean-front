import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredContent = '';
  enteredTitle = '';
  @Output() postCreated = new EventEmitter<Post>();

  constructor(public postsService: PostsService) { }

  ngOnInit() {
  }

  onAddPost(form: NgForm) {
    if(form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
    form.reset();
  }

}
