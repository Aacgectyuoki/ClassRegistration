import { Component, OnInit } from '@angular/core';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-update-product-price',
  templateUrl: './update-product-price.component.html',
  styleUrls: ['./update-product-price.component.css']
})
export class UpdateProductPriceComponent implements OnInit {
  updateMsg?:string;
  constructor(public productService:ClassService) { }

  ngOnInit(): void {
  }
  updatePrice(classRef:any){
    console.log(classRef);
    this.productService.updateProductPrice(classRef).subscribe((result:string)=> {
      this.updateMsg=result;
    });
  }
}