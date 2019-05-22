import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GoodTextService} from '../good-text.service';

declare const Swiper: any;

@Component({
  selector: 'app-good-text-detail',
  templateUrl: './good-text-detail.component.html',
  styleUrls: ['./good-text-detail.component.scss']
})
export class GoodTextDetailComponent implements OnInit, AfterViewInit {
  goodTextDetail: object;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private goodTextService: GoodTextService) {
  }

  ngOnInit() {
    const valueName = 'value';
    this.goodTextDetail = JSON.parse(this.activatedRoute.params[valueName].data);
  }

  carouselLoad() {
    const galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    const galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });
  }

  backPage() {
    history.go(-1);
  }

  clickLike(id) {
    this.goodTextService.clickLike(id).then(rep => {
      this.goodTextDetail = rep;
    });
  }

  ngAfterViewInit(): void {
    this.carouselLoad();
  }
}
