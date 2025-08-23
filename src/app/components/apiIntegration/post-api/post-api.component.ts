import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {

  postObj: any = {
    "userId": 0,
    "title": "",
    "body": ""
  };

  postList: any[] = [];

  http = inject(HttpClient);

  ngOnInit(): void {
    this.getPosts();
  }

  onSave(){
    debugger;
    this.http.post("https://jsonplaceholder.typicode.com/posts",this.postObj).subscribe((res:any)=>{
      console.log(res);
      if(res){
        alert("Post Created Success");
        this.getPosts();
      }
      else{
        alert("Something went wrong");
      }
    }, error=>{
      console.log(error);
    })
  }

  onUpdate(){

  }

  getPosts(){
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((result:any)=>{
      console.log(result);
      this.postList = result;
    }, error=>{
      console.log(error);
    });
  }


}
