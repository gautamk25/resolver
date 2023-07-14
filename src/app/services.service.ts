import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  getWeather(city:any){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric')
  }

  printWord(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
