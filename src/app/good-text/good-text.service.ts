import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoodTextService {

  constructor(private httpClient: HttpClient) {
  }

  public listGoodText() {
    return new Promise((resolve, reject) => this.httpClient.get('http://114.115.253.92:8083/marketing/listGoodText')
      .subscribe(resolve, reject));
  }

  public getGoodTextDetail(id) {
    return new Promise((resolve, reject) => this.httpClient.get('http://114.115.253.92:8083/marketing/listGoodText?id=' + id)
      .subscribe(resolve, reject));
  }

  public clickLike(goodTextId) {
    return new Promise((resolve, reject) => this.httpClient.post('http://114.115.253.92:8083/marketing/clickLike', {id: goodTextId})
      .subscribe(resolve, reject));
  }
}
