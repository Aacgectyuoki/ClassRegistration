import { Component, OnInit } from '@angular/core';
import { ClassService } from '../class.service';

@Component({
  selector: 'app-delete-by-id',
  templateUrl: './delete-by-id.component.html',
  styleUrls: ['./delete-by-id.component.css']
})
export class DeleteByIdComponent implements OnInit {
  deleteMsg?:string;
  constructor(public classSer:ClassService) { }

  ngOnInit(): void {
  }

  deleteById(id:any){
    console.log("id is "+id);
    this.classSer.deleteClassById(id).subscribe((result:string)=> {
        this.deleteMsg=result;
    })
  }
}