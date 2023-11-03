import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private ProductService: ProductService) {}

  loading: boolean = false;
  data: Product[] | any = [];

  ngOnInit(){
    this.loading = true;
    this.ProductService.getProducts().subscribe((data)=>{
      this.loading = false;
      this.data = data;
      
    },(error)=>{
      this.loading = false;
      console.log(error);
      
    })
  }

}
