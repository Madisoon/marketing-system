import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marketing-system';
  menuData = [{
    name: '推荐',
    status: true,
    routing: '/home'
  }, {
    name: '新品',
    status: false,
    routing: '/newProduct'
  }, {
    name: '好评榜',
    status: false,
    routing: '/praiseList'
  }, {
    name: '好文',
    status: false,
    routing: '/goodText'
  }];

  changeMenuStatus(data) {
    this.menuData.forEach((item) => {
      item.status = false;
    });
    data.status = true;
  }
}
