import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { MaterialModule } from '../material.module';
import { GaleriaComponent } from './galeria/galeria.component';

import { SwiperModule } from 'swiper/angular';
import { CarruselComponent } from './carrusel/carrusel.component';

import { DetalleComponent } from './detalle/detalle.component';
import { SliderDetallesComponent } from './slider-detalles/slider-detalles.component';
import { ProductoComponent } from './producto/producto.component';



@NgModule({
  entryComponents: [
    DetalleComponent
  ],
  declarations: [
    SliderComponent,
    SidebarComponent,
    BuscadorComponent,
    GaleriaComponent,
    CarruselComponent,
    DetalleComponent,
    SliderDetallesComponent,
    ProductoComponent
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
    CarruselComponent,
    SliderDetallesComponent]
})
export class ComponentModule { }
