import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoodTextService {

  constructor(private httpClient: HttpClient) {
  }

  public listGoodText() {
    return new Promise((resolve, reject) => this.httpClient.get('http://localhost:8083/marketing/listGoodText')
      .subscribe(resolve, reject));
  }
}
