import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';


@NgModule({
  declarations: [
    PatientsComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    HttpClientModule,
    FormsModule

  ]
})
export class PatientsModule { }
