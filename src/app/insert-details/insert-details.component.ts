import { Component,OnInit,Input } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-details',
  templateUrl: './insert-details.component.html',
  styleUrls: ['./insert-details.component.css']
})
export class InsertDetailsComponent implements OnInit {
  @Input() userData = { name:'',age: 0,mark:0 };

  constructor(private service: MyserviceService,private router:Router){ }

  ngOnInit(): void {
      
  }

  adduserdata(): void {
    this.service.addwebApiTab(this.userData).subscribe(
      (result) => {
        this.router.navigate(['/AllDetails']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  

}
