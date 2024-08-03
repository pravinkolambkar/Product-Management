import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/product.model';
import { ProductManageService } from 'src/app/service/product-manage.service'; 

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  product: Product;
  productData: Product[] = [];

  constructor(private productservice: ProductManageService) {
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
    
  }

  onSubmit(addProductForm: NgForm) {
    //this.productData = data;
    this.productservice.addProduct(this.product).subscribe((res: any) => {
      this.productData = res;
      console.log(this.productData);
    })
    addProductForm.resetForm();
  }

}
