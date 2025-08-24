import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-ngtemplate',
  imports: [CommonModule],
  templateUrl: './ngtemplate.component.html',
  styleUrl: './ngtemplate.component.css'
})
export class NgtemplateComponent {

  isUserLoggedIn: boolean = true;
  LoggedUserName: string = 'Kalpesh';

  @ViewChild('DynamicTem') dynaTemplate : TemplateRef<any> | undefined;
  @ViewChild('DynamicContainer', {read:ViewContainerRef}) dyanContainer : ViewContainerRef | undefined;

  loadTemplate(){
    debugger;
    if(this.dynaTemplate)
    {
      this.dyanContainer?.createEmbeddedView(this.dynaTemplate);
    }

  }

}
