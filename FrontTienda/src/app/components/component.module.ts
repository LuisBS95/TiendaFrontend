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
import { RouterModule } from '@angular/router';
import { SliderProdComponent } from './slider-prod/slider-prod.component';
import { GaleriaCategoComponent } from './galeria-catego/galeria-catego.component';
import { MapaComponent } from './mapa/mapa.component';



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
    ProductoComponent,
    SliderProdComponent,
    GaleriaCategoComponent,
    MapaComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    MaterialModule,
    RouterModule
    
  ],
  exports:[SidebarComponent,
    SliderComponent,
    BuscadorComponent,
    GaleriaComponent,
    CarruselComponent,
    SliderDetallesComponent,
    SliderProdComponent,
    GaleriaCategoComponent,
    MapaComponent]
})
export class ComponentModule { }
