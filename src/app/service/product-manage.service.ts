import { Injectable, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Product, User } from 'src/app/product.model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProductManageService implements OnInit{

  url = "http://localhost:3000/products";

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    return this.http.get(this.url);
  }

  addProduct(data:any) {
    return this.http.post(this.url, data);
  }

  getProduct(id:string) {
    return this.http.get<Product>(this.url +"/" +id);
  }

  updateProduct(id: number, data: any) {
    return this.http.put(this.url +"/" +id , data)
  }

  deleteProduct(id: number) {
    return this.http.delete(this.url +"/" +id)
  }

  signUp(data: User) {
    return this.http.post("http://localhost:3000/users", data);  
  }

  userLogin(data: any) {
    return this.http.get(`http://localhost:3000/users?username=${data.username}&&password=${data.$password}`, {observe: 'response'}).subscribe((value: any) => {
      console.log(value);
      if(value.body.length == 1) {
        this.router.navigate(['/productlist']);
      } else {
        alert('Credentials not correct');
      }
    });  
  }
}
