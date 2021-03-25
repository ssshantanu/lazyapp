import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerlistComponent } from './customerlist/customerlist.component';

import { CustomersComponent } from './customers.component';

const routes: Routes = [
  {path: '', component: CustomersComponent ,children:[]},
  {path :'customerlist' , component :CustomerlistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
