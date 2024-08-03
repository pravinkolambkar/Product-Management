import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product.model';
import { ProductManageService } from 'src/app/service/product-manage.service'; 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  product: Product;
  productList: any;
  productDt: Product[] = [];

  constructor(private productservice: ProductManageService, private router: Router ) {
    this.product = {
      id: 0,
      productName: "",
      productPrice: 0,
      productCategory: "",
      productUrl: "",
      productDescription: "",
      }
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productservice.getProductList().subscribe((res:any) => {
      this.productList = res;
      console.log(this.productList);
    })
  }

  onDelete(id: number) {
    this.productservice.deleteProduct(id).subscribe((res: any) => {
      console.log(res);
      this.productList.splice(id,1)
    })
  }

  // onEditProduct(id: number) {
  //   this.productservice.updateProduct(id).subscribe((res: any) => {
  //     this.productDt = res;
  //     console.log(this.productDt);
  //   })
  // }
}
