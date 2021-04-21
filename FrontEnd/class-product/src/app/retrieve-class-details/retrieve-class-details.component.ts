import { Component, OnInit } from '@angular/core';
import { Product } from '../model.product';
import { ClassService } from '../class.service';
@Component({
  selector: 'app-retrieve-class-details',
  templateUrl: './retrieve-class-details.component.html',
  styleUrls: ['./retrieve-class-details.component.css']
})
export class RetrieveClassDetailsComponent implements OnInit {

  products?:Array<Product>
  constructor(public classDetailSer:ClassService) { }

  ngOnInit(): void {
      this.classDetailSer.retrieveAllClassDetails().subscribe(result=>this.products=result);
  }


}