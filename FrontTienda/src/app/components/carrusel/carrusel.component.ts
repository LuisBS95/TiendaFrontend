import { Component, OnInit , AfterViewInit ,ViewEncapsulation, Input} from '@angular/core';
import Swiper from 'swiper';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);
@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CarruselComponent implements OnInit , AfterViewInit {

  //public Swipes : Swiper ;
swiper : any = [1,2,3];

@Input() slider: any = "";


 constructor(){
  
 }
  ngOnInit(): void {
    
  }

  ngAfterViewInit() : void {

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

  onSlidePrev(){
   
  }

  onSlideNext(){
 
  }

 }
