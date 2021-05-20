import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { MaterialModule } from '../material.module';
import { GaleriaComponent } from './galeria/galeria.component';



@NgModule({
  declarations: [
    SliderComponent,
    SidebarComponent,
    BuscadorComponent,
    GaleriaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[SidebarComponent,
    SliderComponent,
    BuscadorComponent,
    GaleriaComponent]
})
export class ComponentModule { }
