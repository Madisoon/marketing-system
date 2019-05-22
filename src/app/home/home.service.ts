import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {
  }

  listNewTopByTime() {
    return new Promise((resolve, reject) => this.httpClient.get('http://114.115.253.92:8083/marketing/listNewProductTopByTime')
      .subscribe(resolve, reject));
  }

  listGoodTextByGood() {
    return new Promise((resolve, reject) => this.httpClient.get('http://114.115.253.92:8083/marketing/listGoodTextByGood')
      .subscribe(resolve, reject));
  }

  listPraiseListByFrequency() {
    return new Promise((resolve, reject) => this.httpClient.get('http://114.115.253.92:8083/marketing/listPraiseListByFrequency')
      .subscribe(resolve, reject));
  }
}
