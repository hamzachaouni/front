import { TestService } from './../../services/test.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  


  status: boolean = true;
  posts: any[] = [];

  /*post = {
    id: 0,
    title: '',
    description: '',
    shorttitle: '',
    text: '',
    social: ''
  }*/
  post = 
    {
      id: 0,
      title: '',
      description: '',
      shorttitle: '',
      shortdescription: '',
      inputs: '',
      image: '',
      recomended: '',
      promotion: '',
      social: '',
      product: '',
      business: '',
      personal: '',
    }
  
  
  constructor(private testService: TestService) {
   
   }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.testService.getAll()
    .subscribe( posts => this.posts = posts.data
    , error => {
      alert('erreur inattendu');
      console.log(error)
    }
  )
  }

  createPost() {
    this.testService.create(this.post)
    .subscribe(newPost => { this.post.id = newPost.id;
      this.posts.unshift(this.post);

      /*this.post = {
        id: 0,
        title: '',
        description: '',
        shorttitle: '',
        text: '',
        social: ''
      }*/
      this.post = 
      {
        id: 0,
        title: '',
        description: '',
        shorttitle: '',
        shortdescription: '',
        inputs: '',
        image: '',
        recomended: '',
        promotion: '',
        social: '',
        product: '',
        business: '',
        personal: '',
      }
    })
  }


  editPost(post) {
    this.status = false;
    this.post = post;
  }

  updatePost() {
    this.testService.update(this.post)
    .subscribe(() => {

      /*this.post = {
        id: 0,
        title: '',
        description: '',
        shorttitle: '',
        text: '',
        social: ''
      }*/
      this.post = 
      {
        id: 0,
        title: '',
        description: '',
        shorttitle: '',
        shortdescription: '',
        inputs: '',
        image: '',
        recomended: '',
        promotion: '',
        social: '',
        product: '',
        business: '',
        personal: '',
      }
      this.status = true;
    }, error => {
      alert('erreur inattendu');
      console.log(error)
    })
    
  }

  deletePost(post) {
    this.testService.delete(post)
    .subscribe(() => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    })
  }

}
