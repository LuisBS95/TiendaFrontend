import { Component, OnInit , AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})

export class CarruselComponent implements OnInit , AfterViewInit {

 
swiper : any = [1,2,3];
  ngOnInit(): void {
  }

  ngAfterViewInit() : void {

    var mySwiper = new Swiper('.swiper-container',{
      loop : true,
    });
  }


 }
