import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = '../../assets/Data/Productsdata.json'; // Caminho para o seu JSON de produtos

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productsUrl);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any[]>(this.productsUrl)
      .pipe(
        map((products: any[]) => products.find((product: { id: number; }) => product.id === id))
      );
  }
}
