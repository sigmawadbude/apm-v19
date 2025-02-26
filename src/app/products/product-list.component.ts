import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from './product-service';
import { Product } from './product';
import { CurrencyPipe, LowerCasePipe, NgFor, NgIf } from '@angular/common';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [NgIf, NgFor, LowerCasePipe, CurrencyPipe, ConvertToSpacesPipe, StarComponent, RouterModule, FormsModule],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Product List';
  errorMessage = '';
  private _listFilter = '';
  showImage = false;
  imageWidth = 50;
  imageMargin = 2;
  sub!: Subscription;
  filteredProducts: Product[] = [];
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: (products: Product[]) => {
        this.products = products;
        this.listFilter = '';
      },
      error: (err: string) => (this.errorMessage = err),
    });
  }

  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingChange(message: string): void {
    console.log(message);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
