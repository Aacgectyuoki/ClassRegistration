import { Component, OnInit } from '@angular/core';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {
  updateMsg?:string;
  constructor(public classService:ClassService) { }

  ngOnInit(): void {
  }
  updateDetails(classRef:any){
    console.log(classRef);
    this.classService.updateDetails(classRef).subscribe((result:string)=> {
      this.updateMsg=result;
    });
  }
}