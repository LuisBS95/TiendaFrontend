
import { Component, OnInit , AfterViewInit ,ViewEncapsulation, Input} from '@angular/core';
import Swiper from 'swiper';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);
@Component({
  selector: 'app-slider-detalles',
  templateUrl: './slider-detalles.component.html',
  styleUrls: ['./slider-detalles.component.css']
})
export class SliderDetallesComponent implements OnInit ,AfterViewInit {

  swiper : any = ['url(../../../assets/img/calavera.jpg)','url(../../../assets/img/anubis.jpg)','url(../../../assets/img/mandala.jpg)'];
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void{
    var Swipes = new Swiper('.swiper-container', {
      loop: true,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      pagination: {
          el: '.swiper-pagination',
      },
  });
  }

}
