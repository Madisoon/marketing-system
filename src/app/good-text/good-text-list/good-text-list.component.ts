import {Component, OnInit} from '@angular/core';
import {GoodTextService} from '../good-text.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-good-text-list',
  templateUrl: './good-text-list.component.html',
  styleUrls: ['./good-text-list.component.scss']
})
export class GoodTextListComponent implements OnInit {
  goodTextData: any = [];

  goodTextRightData: any = [];

  constructor(private goodTextService: GoodTextService, private router: Router) {
  }

  ngOnInit() {
    this.listData();
  }

  public listData() {
    this.goodTextService.listGoodText().then(rep => {
      // @ts-ignore
      rep.forEach((item, index) => {
        if (index % 2 === 0) {
          this.goodTextData.push(item);
        } else {
          this.goodTextRightData.push(item);
        }
      });
    }).catch(rep => {
      console.log(rep);
    });
  }

  public navGoodTextDetail(data) {
    this.router.navigate(['/goodText/detail', {data: data.id}]);
  }
}
