import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {

  firstName = signal("Kalpesh");
  lastName = signal("Bhatkar");

  fullName = computed(() => this.firstName() + " " + this.lastName());

  rollNo = signal<number>(123);

  isActive = signal<boolean>(true);

  courseName: string = "Java";

  cityList = signal(["Pune", "Mumbai"]);

  studentObj = signal({
    name: 'Kalpesh',
    city: 'Mumbai'
  });



  constructor() {
    const fName = this.firstName();

    // setTimeout(() => {
    //   this.firstName.set("Dot Net");
    //   this.courseName = "HTML";
    // }, 5000);

  }

  changeFirstName() {
    this.firstName.set("Sachin");
  }

  changeLastName() {
    this.lastName.set("Tendulkar");
  }

  addCity(){
    this.cityList.set([...this.cityList(),"Nashik"]);
  }

  changeStudentCity(){
    this.studentObj.set({...this.studentObj(),city:'Pune'});
  }
}
