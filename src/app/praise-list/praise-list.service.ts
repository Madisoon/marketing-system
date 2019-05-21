import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PraiseListService {

  constructor(private httpClient: HttpClient) {
  }

  listPraiseList() {
    return new Promise((resolve, reject) => this.httpClient.get('http://localhost:8083/marketing/listPraiseList')
      .subscribe(resolve, reject));
  }
}
