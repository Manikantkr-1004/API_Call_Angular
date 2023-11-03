import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  product: Product | null = null;
  loading: boolean = false;

  constructor(private route: ActivatedRoute, private ProductService: ProductService){
    this.loading = true;

    this.route.params.subscribe(params =>{
      const productId = params['id'];

      this.ProductService.getDynamicProducts(productId).subscribe((data:any)=>{
        this.product = data;
        this.loading = false;
        
      },(error)=>{
        console.log(error);
        this.loading = false;
      })

    })
  }


}
