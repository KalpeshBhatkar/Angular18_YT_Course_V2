import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  imports: [],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddEmployeeComponent implements OnInit {

  http = inject(HttpClient);

  //userList: any[] = [];
  name: string = 'HTML';

  userList = signal<any[]>([]);

  constructor(private cd:ChangeDetectorRef){

  }


  ngOnInit(): void {
    this.http.get("https://json-placeholder.mock.beeceptor.com/users").subscribe((result:any)=>{
      //this.userList = result;
      this.userList.set(result);
      this.name = 'JAVA';
      // setTimeout(() => {
      //   this.cd.detectChanges();
      // }, 5000);
    });
  }

  reloadUI() {

  }
}
