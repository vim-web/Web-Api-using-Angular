import { Component ,OnInit} from '@angular/core';
import { MyserviceService,WebApiTab } from '../myservice.service';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-display-all-details',
  templateUrl: './display-all-details.component.html',
  styleUrls: ['./display-all-details.component.css']
})
export class DisplayAllDetailsComponent implements OnInit{
  Getdata:WebApiTab[]=[];

  constructor(public details:MyserviceService,private router:Router){}

  ngOnInit(): void {
      this.GetAllDetails();
  }
  GetAllDetails(): void{
    this.details.getAllWebApiTabs().subscribe((resp: any) => {
      this.Getdata=resp;
    });
  }
  delete(id: number): void {
    this.details.deleteWebApiTab(id)
    .subscribe(() => {
      this.GetAllDetails();
    },
    (err) => { 
      console.log(err);
    }
  );
  }

}
