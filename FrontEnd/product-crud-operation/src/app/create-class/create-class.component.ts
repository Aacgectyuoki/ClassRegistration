import { Component, OnInit } from '@angular/core';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent implements OnInit {

  constructor(public classService:ClassService) { }

  ngOnInit(): void {
  }

  createClass(classRef:any){
    console.log(classRef);
    this.classService.createClassDetailsInfo(classRef);
  }
}