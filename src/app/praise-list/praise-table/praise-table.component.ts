import {Component, OnInit} from '@angular/core';
import {PraiseListService} from '../praise-list.service';

@Component({
  selector: 'app-praise-table',
  templateUrl: './praise-table.component.html',
  styleUrls: ['./praise-table.component.scss']
})
export class PraiseTableComponent implements OnInit {
  secondMenu = [
    {
      name: '时尚',
      status: true,
      value: '/home'
    }, {
      name: '美妆',
      status: false,
      value: '/newProduct'
    }, {
      name: '健身',
      status: false,
      value: '/praiseList'
    }, {
      name: '科技',
      status: false,
      value: '/goodText'
    }, {
      name: '影音',
      status: false,
      value: '/goodText'
    }, {
      name: '美食',
      status: false,
      value: '/goodText'
    }
  ];

  praiseListData: any;

  constructor(private praiseListService: PraiseListService) {
    this.praiseListData = [
      {
        img: 'assets/img/phone1.jpg',
        title: 'Apple/苹果 IPhone XS Max',
        address: '苏宁易购官方旗舰店',
        activity: '天猫直送',
        price: '9088',
        source: '淘宝精选',
        good: '3100',
      },
      {
        img: 'assets/img/phone2.jpg',
        title: 'Samsung/三星 Galaxy S10+',
        address: '三星/韩国品牌',
        activity: '送无线充电器',
        price: '6999.00',
        source: '淘宝精选',
        good: '5028',
      },
      {
        img: 'assets/img/phone3.jpg',
        title: 'vivo iQOO 生而强悍',
        address: 'Vivo官方旗舰店',
        activity: '',
        price: '3298.00',
        source: '淘宝精选',
        good: '68000',
      },
      {
        img: 'assets/img/phone4.jpg',
        title: 'vivo S1手机',
        address: '能良数码官方旗舰店',
        activity: '',
        price: '2298.00',
        source: '淘宝精选',
        good: '8798',
      },
      {
        img: 'assets/img/phone5.jpg',
        title: 'Samsung/三星 GALAXY Note9 SM-N9600 ',
        address: '',
        activity: '12期免息',
        price: '6599.00',
        source: '淘宝精选',
        good: '3902',
      },
      {
        img: 'assets/img/phone6.jpg',
        title: '黑鲨游戏手机 2 骁龙855 塔式全域液冷散热',
        address: '小米官方旗舰店',
        activity: '咨询可减60元',
        price: '3269.00',
        source: '淘宝精选',
        good: '194',
      },
      {
        img: 'assets/img/phone7.jpg',
        title: '红魔Mars电竞手机2代游戏',
        activity: '送向量保护壳',
        price: '3099.00',
        good: '215',
      },
    ];
  }

  ngOnInit() {
  }

  changeMenuStatus(data) {
    this.secondMenu.forEach((item) => {
      item.status = false;
    });
    data.status = true;
  }
}
