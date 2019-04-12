import {AfterViewInit, Component, OnInit} from '@angular/core';

declare const Swiper: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  carousel;

  constructor() {
  }


  ngOnInit() {

  }

  carouselLoad() {
    this.carousel = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: true,
      slidesPerView: 'auto',
      freeMode: true,
      observer: true,
      observeParents: true,
    });
  }

  ngAfterViewInit(): void {
    this.carouselLoad();
  }
}
