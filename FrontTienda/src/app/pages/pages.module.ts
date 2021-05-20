import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';


//Modulos personalizados.
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentModule } from '../components/component.module';

//Modulos Angular
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [PagesComponent,
  HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedModule,
    ComponentModule
  ]
})
export class PagesModule { }
