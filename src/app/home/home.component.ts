import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';
import {Router} from '@angular/router';

declare const Swiper: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  carousel;

  carouselProduct: any = [];
  recommendedProduct: any = [];
  goodTextData: any = [];
  goodTextRightData: any = [];

  constructor(private router: Router, private homeService: HomeService) {
  }

  ngOnInit() {
    this.listNewTopByTime();
  }

  ngAfterViewInit(): void {
    this.carouselLoad();
    this.listGoodTextByGood();
    this.listPraiseListByFrequency();
  }

  goNewProductDetail(data) {
    this.router.navigate(['/newProduct/detail', {data: JSON.stringify(data)}]);
  }

  navGoodTextDetail(data) {
    this.router.navigate(['/goodText/detail', {data: JSON.stringify(data)}]);
  }

  navPraiseListDetail(data) {
    this.router.navigate(['/praiseList/detail', {data: JSON.stringify(data)}]);
  }

  listNewTopByTime() {
    this.homeService.listNewTopByTime().then((rep) => {
      this.carouselProduct = rep;
    });
  }

  listGoodTextByGood() {
    this.homeService.listGoodTextByGood().then((rep) => {
      // @ts-ignore
      rep.forEach((item, index) => {
        if (index % 2 === 0) {
          this.goodTextData.push(item);
        } else {
          this.goodTextRightData.push(item);
        }
      });
    });
  }

  listPraiseListByFrequency() {
    this.homeService.listPraiseListByFrequency().then((rep) => {
      this.recommendedProduct = rep;
      this.recommendedProduct.length = 10;
    });
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
}
