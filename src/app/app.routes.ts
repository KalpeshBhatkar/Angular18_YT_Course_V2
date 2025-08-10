import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { StructuralDirComponent } from './components/directive/structural-dir/structural-dir.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { IfelseComponent } from './components/controlFlow/ifelse/ifelse.component';
import { ForComponent } from './components/controlFlow/for/for.component';
import { SwitchComponent } from './components/controlFlow/switch/switch.component';

export const routes: Routes = [
    {
        path:'add-emp',
        component: AddEmployeeComponent
    },
    {
        path:'data-binding',
        component: DataBindingComponent
    },
    {
        path:'emp-list',
        component: EmployeeListComponent
    },
    {
        path: 'structural-dir',
        component: StructuralDirComponent
    },
    {
        path: 'attribute-dir',
        component: AttributeDirectiveComponent
    },
    {
        path: 'if-else',
        component: IfelseComponent
    },
    {
        path: 'for',
        component: ForComponent
    },
    {
        path: 'switch-case',
        component: SwitchComponent
    }
];
