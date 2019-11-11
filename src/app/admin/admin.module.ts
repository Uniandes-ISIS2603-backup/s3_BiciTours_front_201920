import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListInsurancesComponent } from './list-insurances/list-insurances.component';
import { BlogListAdminComponent } from './blog-list-admin/blog-list-admin.component';
import { NavComponent } from './nav/nav.component';
import {AdminRoutingModule} from './admin-routing.module';
import {RouterModule } from '@angular/router';
import { CreateInsuranceComponent } from './create-insurance/create-insurance.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogCreateComponent } from './blog-create-admin/blog-create-admin.component';

@NgModule({
  declarations: [ListInsurancesComponent, BlogListAdminComponent, NavComponent, CreateInsuranceComponent, BlogCreateComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
