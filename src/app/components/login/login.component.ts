import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/product.model';
import { ProductManageService } from 'src/app/service/product-manage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private productservice: ProductManageService) {

    this.user = {
      username: "",
      password: "",
      email: "",
      city: "",
    }
  }

  ngOnInit(): void {
    
  }

  onLogin(data: any) {
    this.productservice.userLogin(data);
  }

}
