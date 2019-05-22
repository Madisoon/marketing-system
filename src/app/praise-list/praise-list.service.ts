import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PraiseListService {

  constructor(private httpClient: HttpClient) {
  }

  listPraiseList(type) {
    return new Promise((resolve, reject) => this.httpClient.get('http://114.115.253.92:8083/marketing/listPraiseList', {
      params: {
        type,
      }
    })
      .subscribe(resolve, reject));
  }

  getPraiseListDetailById(id) {
    return new Promise((resolve, reject) => this.httpClient.get('http://114.115.253.92:8083/marketing/getPraiseListDetailById', {
      params: {
        id,
      }
    })
      .subscribe(resolve, reject));
  }
}
