import {Component, OnInit} from '@angular/core';
import {GoodTextService} from './good-text.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-good-text',
  templateUrl: './good-text.component.html',
  styleUrls: ['./good-text.component.scss']
})
export class GoodTextComponent implements OnInit {
  goodTextData: any;

  goodTextRightData: any;

  constructor(private goodTextService: GoodTextService) {
    this.goodTextData = [{
      img: 'assets/img/good2.png',
      title: 'NINEKA南卡无线充电宝，真心赞👍！高颜值，而且迷你好用的充电宝推荐！',
      header: 'https://img.xiaohongshu.com/avatar/5caabc1e7fb6f5000104f2d7.jpg@80w_80h_90q_1e_1c_1x.jpg',
      author: '凯哥搞机',
      good: '6',
    }, {
      img: 'assets/img/good1.png',
      title: '2999赢得一款正品iPhoneX！遇见超大福利！',
      header: 'https://img.xiaohongshu.com/avatar/5cb7f3d9e46a9100012e401f.jpg@80w_80h_90q_1e_1c_1x.jpg',
      author: '小酒窝',
      good: '1',
    }, {
      img: 'assets/img/good3.png',
      title: '新西兰版华为P30 Pro 8G内寸256G容量',
      header: 'https://img.xiaohongshu.com/avatar/5cb45b535108db0001d70da2.jpg@80w_80h_90q_1e_1c_1x.jpg',
      author: 'YuHsin',
      good: '7',
    }, {
      img: 'assets/img/good4.png',
      title: '自制手机壳|做出你独一无二的手机壳灵感来自于博主 @lulucialucia 的',
      header: 'https://img.xiaohongshu.com/avatar/593225c982ec394f468dc066.jpg@80w_80h_90q_1e_1c_1x.jpg',
      author: '🌟Mia酱要努力🌻',
      good: '59',
    }, {
      img: 'assets/img/good5.png',
      title: '确认过眼神，你是便宜又好用的运动手环 本着不用掏手机看时间并且可以计步数的需求',
      header: 'https://img.xiaohongshu.com/avatar/5bd9cf1bba89df0001ae1139.jpg@80w_80h_90q_1e_1c_1x.jpg',
      author: '恶习难改的肉',
      good: '52',
    }];

    this.goodTextRightData = [{
      img: 'assets/img/goodright3.png',
      title: '超美星空水彩画临摹素材 萌萌最最最喜欢的星空系列—出自大神Humby Art 又快到周末画画时间啦！开心',
      header: 'https://img.xiaohongshu.com/avatar/598243dfb46c5d2e2ac33c2a.jpg@80w_80h_90q_1e_1c_1x.jpg',
      author: 'Meghan萌萌',
      good: '116',
    }, {
      img: 'assets/img/goodright1.png',
      title: '今天来发一篇有插画教程的吧～最近受一部电影的影响喜欢艳丽色系，所以画的插画颜色也比较亮，你们喜欢吗？',
      header: 'https://img.xiaohongshu.com/avatar/5b44b35214de412d713473a4.jpg@80w_80h_90q_1e_1c_1x.jpg',
      author: '明鸣',
      good: '27',
    }, {
      img: 'assets/img/goodright2.png',
      title: '适合新手的星空水彩画超详细原创教程（附画星星技巧）',
      header: 'https://img.xiaohongshu.com/avatar/5b3726f0b46c5d04c0476ee6.jpg@80w_80h_90q_1e_1c_1x.jpg',
      author: '贺赫赫',
      good: '33',
    }, {
      img: 'assets/img/goodright4.png',
      title: '手绘水彩插画 水彩颜料：ds 史明克 荷尔拜因 水彩纸：获多福',
      header: 'https://img.xiaohongshu.com/avatar/5b841d247af8390001f514ec.jpg@80w_80h_90q_1e_1c_1x.jpg',
      author: 'SUNRISE-J',
      good: '60',
    }, {
      img: 'assets/img/goodright5.png',
      title: '【手绘插画】水彩彩铅 笔尖下的古镇 之前我讲过关于绘画入门的3个小建议',
      header: 'https://img.xiaohongshu.com/avatar/5acec924d1d3b925283cacfe.jpg@80w_80h_90q_1e_1c_1x.jpg',
      author: 'QING SHEN',
      good: '142',
    }];
  }

  ngOnInit() {
    this.listData();
  }

  public listData() {
    this.goodTextService.listGoodText().then(rep => {
      console.log(rep);
      // @ts-ignore
      rep.forEach(item => console.log(1));
    }).catch(rep => {
      console.log(rep);
    });
  }

}
