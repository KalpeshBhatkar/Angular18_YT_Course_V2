import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-ngcontainer',
  imports: [CommonModule],
  templateUrl: './ngcontainer.component.html',
  styleUrl: './ngcontainer.component.css'
})
export class NgcontainerComponent {

  isContainer: boolean = false;
  http = inject(HttpClient);
  userList: any[] = [];
  isApi: boolean = false;

  getAllUser() {
    this.isApi = true;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result: any) => {
      this.userList = result;
      this.isApi = false;
    });
  }

}
