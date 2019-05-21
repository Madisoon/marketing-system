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
      type: '2',
      status: true,
      value: '/home'
    }, {
      name: '美妆',
      type: '1',
      status: false,
      value: '/newProduct'
    }, {
      name: '健身',
      type: '',
      status: false,
      value: '/praiseList'
    }, {
      name: '科技',
      type: '',
      status: false,
      value: '/goodText'
    }, {
      name: '影音',
      type: '',
      status: false,
      value: '/goodText'
    }, {
      name: '美食',
      type: '3',
      status: false,
      value: '/goodText'
    }
  ];

  praiseListLeftData: any = [];
  praiseListRightData: any = [];

  constructor(private praiseListService: PraiseListService) {
  }

  ngOnInit() {
    this.listPraiseList('2');
  }

  listPraiseList(type: string) {
    this.praiseListLeftData = [];
    this.praiseListRightData = [];
    this.praiseListService.listPraiseList(type).then((rep) => {
      // @ts-ignore
      rep.forEach((item, index) => {
        if (index % 2 === 0) {
          this.praiseListLeftData.push(item);
        } else {
          this.praiseListRightData.push(item);
        }
      });
    });
  }

  changeMenuStatus(data) {
    this.secondMenu.forEach((item) => {
      item.status = false;
    });
    data.status = true;
    this.listPraiseList(data.type);
  }
}
