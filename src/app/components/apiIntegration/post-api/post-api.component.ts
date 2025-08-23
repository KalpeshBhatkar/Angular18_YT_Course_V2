import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../service/department.service';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {

  postObj: any = {
    "id": 0,
    "userId": 0,
    "title": "",
    "body": ""
  };

  postList: any[] = [];

  http = inject(HttpClient);

  constructor(private deptSrv: DepartmentService){
    const result = this.deptSrv.addTwoNo(25,56);
    //alert(result);
    //this.deptSrv.apiURL = "New URL";

  }

  ngOnInit(): void {
    this.getPosts();
  }

  // onSave(){
  //   debugger;
  //   this.http.post("https://jsonplaceholder.typicode.com/posts",this.postObj).subscribe((res:any)=>{
  //     //console.log(res);
  //     if(res){
  //       alert("Post Created Success");
  //       this.getPosts();
  //     }
  //     else{
  //       alert("Something went wrong");
  //     }
  //   }, error=>{
  //     console.log(error);
  //   })
  // }

  onSave(){
    debugger;
    this.deptSrv.saveNewDept(this.postObj).subscribe((res:any)=>{
      //console.log(res);
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
    this.http.put("https://jsonplaceholder.typicode.com/posts/"+this.postObj.id,this.postObj).subscribe((res:any)=>{
      if(res){
        alert("Post Updated Success");
        this.getPosts();
      }
      else{
        alert("Something went wrong");
      }
    },error =>{
      console.log(error);
    })

  }

  // getPosts(){
  //   this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((result:any)=>{
  //     //console.log(result);
  //     this.postList = result;
  //   }, error=>{
  //     console.log(error);
  //   });
  // }

  getPosts(){
    this.deptSrv.getAllDept().subscribe((result:any)=>{
      //console.log(result);
      this.postList = result;
    }, error=>{
      console.log(error);
    });
  }

  onEdit(data: any){
    this.postObj = data;
  }

  onDelete(id: number) {
    const isDelete = confirm("Are you sure want to delete");
    if (isDelete) {
      this.http.delete("https://jsonplaceholder.typicode.com/posts/" + id).subscribe((res: any) => {
        if (res) {
          alert("Post Delete Success");
          this.getPosts();
        }
        else {
          alert("Something went wrong");
        }
      }, error => {
        console.log(error);
      })
    }
  }

}
