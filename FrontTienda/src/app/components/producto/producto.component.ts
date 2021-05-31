import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductoComponent implements OnInit {
  thumbsSwiper: any;
  constructor() { 

  }

  ngOnInit(): void {
    
     // M.Carousel.init();
  }

}
