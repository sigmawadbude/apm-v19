import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, throwError } from "rxjs";
import { Product } from "./product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    url = 'api/products/products.json';

    constructor(private http: HttpClient) { }
    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.url)
            .pipe(
                catchError(this.handleError)
            );
    }

    getProduct(id: number): Observable<Product | undefined> {
        return this.getProducts()
          .pipe(
            map((products: Product[]) => products.find(p => p.productId === id))
          );
      }

    private handleError(err: HttpErrorResponse): Observable<never> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(() => errorMessage);
      }
}