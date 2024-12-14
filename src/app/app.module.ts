import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InsertDetailsComponent } from './insert-details/insert-details.component';
import { DisplayAllDetailsComponent } from './display-all-details/display-all-details.component';
import { DisplaywithidComponent } from './displaywithid/displaywithid.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertDetailsComponent,
    DisplayAllDetailsComponent,
    DisplaywithidComponent,
    EditDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
