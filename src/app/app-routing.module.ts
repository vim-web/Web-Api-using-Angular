import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertDetailsComponent } from './insert-details/insert-details.component';
import { DisplayAllDetailsComponent } from './display-all-details/display-all-details.component';
import { DisplaywithidComponent } from './displaywithid/displaywithid.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';


const routes: Routes = [
  {path:'',component:DisplayAllDetailsComponent},
  { path:'AllDetails',component: DisplayAllDetailsComponent },
  { path:'insertdb',component: InsertDetailsComponent },
  { path: 'details/:id', component:DisplaywithidComponent},
  { path: 'editdetails/:id',component:EditDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
