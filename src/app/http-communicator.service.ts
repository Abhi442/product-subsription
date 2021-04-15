import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpCommunicatorService {

  private baseUrl: string = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  private getAPI<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  public getProduct(): Observable<ProductJson> {
    return this.getAPI<ProductJson>(this.baseUrl + 'products');
  };

}

export interface ProductJson {
  products: Products[];
}

export interface Products {
  id: number;
  name: string;
  subscriptionPrice: number;
  subscriptionType: string;
  isChecked?: boolean;
}
