import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);
@Component({
  selector: 'app-slider-prod',
  templateUrl: './slider-prod.component.html',
  styleUrls: ['./slider-prod.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SliderProdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
