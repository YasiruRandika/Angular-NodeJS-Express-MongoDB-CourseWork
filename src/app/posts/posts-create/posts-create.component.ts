import { PostsService } from './../posts.service';
import { Component, EventEmitter, Output, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post} from '../post.model'

@Component({
  selector:'app-post-create',
  templateUrl:'./posts-create.component.html',
  styleUrls:['./posts-create.component.scss']
})

export class PostCreateComponenet{
  enteredContent = '';
  enteredTitle = '';
  @Output() postCreated = new EventEmitter();

  constructor(public postService: PostsService) {

  }

  /*onAddPost(form: NgForm) {
    if(form.invalid) {
      return
    }
    const post : Post = {
      title : form.value.title,
      content: form.value.content
    }

    form.resetForm();

    this.postCreated.emit(post);
  }*/

  onAddPost(form: NgForm) {
    if(form.invalid) {
      return
    }

    this.postService.addPost(form.value.title,form.value.content);
    form.resetForm();
  }
}
