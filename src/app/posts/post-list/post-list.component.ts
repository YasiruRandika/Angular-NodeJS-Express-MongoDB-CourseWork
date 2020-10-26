import { PostsService } from './../posts.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Post} from '../post.model'
import  { Subscription} from'rxjs'

@Component({
  selector:'app-postlist',
  templateUrl:'./post-list.component.html',
  styleUrls:['./post-list.component.scss']
})

export class PostListComponent implements OnInit, OnDestroy{
  posts : Post[]= [];
  postSub : Subscription;

  constructor(public postService : PostsService) {}

  ngOnInit(){
    this.posts = this.postService.getPosts();
    this.postSub = this.postService.getPostUpdateListner()
    .subscribe((posts:Post[]) =>  {
      this.posts = posts;
    });
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
 }
