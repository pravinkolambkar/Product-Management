import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/product.model';
import { ProductManageService } from 'src/app/service/product-manage.service'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  user: User;
  userData: User[] = [];

  constructor(private productservice: ProductManageService, private router: Router) {

    this.user = {
      username: "",
      password: "",
      email: "",
      city: "",
    }
  }

  ngOnInit(): void {
    
  }

  onSignup(signupForm: NgForm) {
    this.productservice.signUp(this.user).subscribe((res: any) => {
      this.userData = res;
      console.log(this.userData);
      this.router.navigate(["/login"]);
    })
    signupForm.resetForm();
  }
}
