import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-praise-list-detail',
  templateUrl: './praise-list-detail.component.html',
  styleUrls: ['./praise-list-detail.component.scss']
})
export class PraiseListDetailComponent implements OnInit {

  praiseListDetail: object = {};

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    const valueName = 'value';
    this.praiseListDetail = JSON.parse(this.activatedRoute.params[valueName].data);
  }

  ngOnInit() {
  }

  goBack() {
    history.go(-1);
  }
}
