import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product.model';
import { ProductManageService } from 'src/app/service/product-manage.service'; 

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit{

  public updatedProduct: Product = {} as Product;
  data: Product[] | undefined;
  alertMsg: boolean = false;
 
  constructor(private productservice: ProductManageService, private route: ActivatedRoute, private router: Router) {
    this.updatedProduct = {
    id: 0,
    productName: "",
    productPrice: 0,
    productCategory: "",
    productUrl: "",
    productDescription: "",
    }
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    this.productservice.getProduct(this.route.snapshot.params['id']).subscribe((res: any) => {
      this.updatedProduct = res;
      console.log(this.updatedProduct);
    })
  }

  onUpdate() {
    this.productservice.updateProduct(this.route.snapshot.params['id'], this.updatedProduct).subscribe((res:any) => {
      this.data = res;
      console.log(this.data);
    })
    this.alertMsg = true;
    
  }

  onClose() {
    this.alertMsg = false;
    
  }
}
