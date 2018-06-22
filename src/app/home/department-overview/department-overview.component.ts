import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-overview',
  templateUrl: './department-overview.component.html',
  styleUrls: ['./department-overview.component.css']
})
export class DepartmentOverviewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
conts departmentId: string; 
  ngOnInit(){
      
        this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
console.log(this.departmentId)
    });
  }
console.log(this.departmentId)
}
