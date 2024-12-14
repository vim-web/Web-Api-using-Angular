import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface WebApiTab{
  id:number;
  name:string;
  age:number;
  mark:number;
}

const endpoint='http://localhost:50290/api/API/';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }

  addwebApiTab(student: any):Observable<any>{
    return this.http.post(endpoint + 'postwebapitab',student);
  }
  getAllWebApiTabs(): Observable<any> {
    return this.http.get<WebApiTab>(endpoint + 'getwebapitabs');
  }
  deleteWebApiTab(id: number): Observable<any> {
    return this.http.delete<WebApiTab>(endpoint + 'deletewebapitab/' + id);
  }
  getWebApiTab(id: number): Observable<any> {
    return this.http.get<WebApiTab>(endpoint + 'getwebapitab/' + id);
  }
  updateWebApiTab(id: number,product: WebApiTab): Observable<any> {
    return this.http.put<WebApiTab>(endpoint + 'putwebapitab/' + id,product);
  }
  

}
