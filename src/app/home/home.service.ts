import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) {
  }

  listNewTopByTime() {
    return new Promise((resolve, reject) => this.httpClient.get('http://localhost:8083/marketing/listNewProductTopByTime')
      .subscribe(resolve, reject));
  }

  listGoodTextByGood() {
    return new Promise((resolve, reject) => this.httpClient.get('http://localhost:8083/marketing/listGoodTextByGood')
      .subscribe(resolve, reject));
  }

  listNewProductByFrequency() {
    return new Promise((resolve, reject) => this.httpClient.get('http://localhost:8083/marketing/listNewProductByFrequency')
      .subscribe(resolve, reject));
  }
}
