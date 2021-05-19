import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BuscadorComponent } from './buscador/buscador.component';



@NgModule({
  declarations: [
    SliderComponent,
    SidebarComponent,
    BuscadorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentModule { }
