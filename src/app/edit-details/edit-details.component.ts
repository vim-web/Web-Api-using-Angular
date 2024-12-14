import { Component, Input, OnInit } from '@angular/core';
import { MyserviceService,WebApiTab } from '../myservice.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {

  @Input() productData: any ={ name:'',age: 0,mark: 0};
  id: number =0;

  constructor(public rest: MyserviceService,private route:ActivatedRoute,private router:Router) { }
  ngOnInit(): void {
      
    var paramId=this.route.snapshot.paramMap.get("id");
    if(paramId !==null && paramId !== undefined)
{
  this.id=+paramId;
} 
this.rest.getWebApiTab(this.id).subscribe(
 (data: {}) => { this.productData = data;}
);

}
updateProduct(): void {
  this.rest.updateWebApiTab(this.id,this.productData).subscribe((result) => {
    this.router.navigate(['/AllDetails/']);
  },(err) => { console.log(err);

  });
}
}
