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
    status: true,
    routing: '/home'
  }, {
    name: '好评榜',
    status: true,
    routing: '/home'
  }, {
    name: '好文',
    status: true,
    routing: '/home'
  }];
}
