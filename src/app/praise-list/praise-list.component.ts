import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-praise-list',
  templateUrl: './praise-list.component.html',
  styleUrls: ['./praise-list.component.scss']
})
export class PraiseListComponent implements OnInit {

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

  constructor() {
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
