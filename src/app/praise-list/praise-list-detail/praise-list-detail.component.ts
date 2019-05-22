import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PraiseListService} from '../praise-list.service';

@Component({
  selector: 'app-praise-list-detail',
  templateUrl: './praise-list-detail.component.html',
  styleUrls: ['./praise-list-detail.component.scss']
})
export class PraiseListDetailComponent implements OnInit {

  praiseListDetail: object = {};

  praiseListId = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private praiseListService: PraiseListService) {
    const valueName = 'value';
    this.praiseListId = this.activatedRoute.params[valueName].data;
  }

  ngOnInit() {
    this.getPraiseListDetailById(this.praiseListId);
  }

  getPraiseListDetailById(id) {
    this.praiseListService.getPraiseListDetailById(id).then((rep) => {
      this.praiseListDetail = rep;
    });
  }

  goBack() {
    history.go(-1);
  }
}
