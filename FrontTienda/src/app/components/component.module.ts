import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { MaterialModule } from '../material.module';
import { GaleriaComponent } from './galeria/galeria.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { SwiperModule } from 'swiper/angular';



@NgModule({
  declarations: [
    SliderComponent,
    SidebarComponent,
    BuscadorComponent,
    GaleriaComponent,
    CarruselComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    MaterialModule
    
  ],
  exports:[SidebarComponent,
    SliderComponent,
    BuscadorComponent,
    GaleriaComponent,
    CarruselComponent]
})
export class ComponentModule { }
