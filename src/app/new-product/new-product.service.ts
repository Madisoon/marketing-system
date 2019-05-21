import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewProductService {

  constructor(private httpClient: HttpClient) {
  }

  listNewProduct() {
    return new Promise((resolve, reject) => this.httpClient.get('http://localhost:8083/marketing/listNewProduct')
      .subscribe(resolve, reject));
  }
}
