import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './component/Egiftcard/create/create.component';
import { ViewAllComponent } from './component/Egiftcard/view-all/view-all.component';

const routes: Routes = [
  {path:'viewall' , component: ViewAllComponent},
  {path:'create' , component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
