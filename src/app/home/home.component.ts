import {AfterViewInit, Component, OnInit} from '@angular/core';

declare const Swiper: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  carousel;
  recommendedProduct: any;

  constructor() {
    this.recommendedProduct = [
      {
        img: 'assets/img/1.jpg',
        title: 'ONLY 118107620 女士花卉连衣裙',
        price: '79元包邮（需用券）',
        source: '淘宝精选',
        time: '2019-04-19 14:04',
      },
      {
        img: 'assets/img/2.jpg',
        title: 'Lenovo 联想 GeekPro台式主机',
        price: '5799元包邮',
        source: 'Lenovo',
        time: '2019-04-19 14:04',
      },
      {
        img: 'assets/img/3.jpg',
        title: '佰生优 酸奶发酵粉 经典5菌型 10g*5袋',
        price: '5.98元（需用券）',
        source: '天猫精选',
        time: '2019-04-19 14:04',
      },
      {
        img: 'assets/img/4.jpg',
        title: 'Apple 苹果 新AirPods 真无线耳机 无线充电盒版',
        price: '1099包邮',
        source: 'APPLE 官方',
        time: '2019-04-19 14:04',
      },
      {
        img: 'assets/img/5.jpg',
        title: 'COACH 蔻驰 Kelsey 女式真皮手提包',
        price: '$89.99（用码，约￥700）',
        source: 'COACH/蔻驰',
        time: '2019-04-19 14:04',
      },
      {
        img: 'assets/img/6.jpg',
        title: ' deli 得力 HZ005-3 和纸胶带',
        price: '28.48元包邮（合7.12元/件）',
        source: '京东精选',
        time: '2019-04-19 14:04',
      },
    ];
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
