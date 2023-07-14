import { Component, OnInit, Renderer2 } from '@angular/core';
import { ServicesService } from '../services.service';

declare var $:any;
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  myWeather:any = [];
  iconURL:string = '';
  city:any;
  box:any = $('.box');
  
  constructor(private service:ServicesService, private renderer:Renderer2) { }

  ngOnInit(): void {
  }

  getCityName(cityName:any){
    this.city = cityName.value;

    this.service.getWeather(this.city).subscribe((res:any) => {
      this.myWeather = res;
      console.log(this.myWeather)
      this.iconURL = 'http://openweathermap.org/img/wn/' + this.myWeather.weather[0].icon + '@2x.png';
    })

    this.renderer.setStyle(this.box.nativeElement, 'backgroundColor', 'red');
  }

}
// import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';
// @Directive({
//   selector: '[appCrazy]'
// })
// export class CrazyDirective implements OnInit {
//   constructor(
//     private renderer: Renderer2, 
//     private elmRef: ElementRef
//   ) { }
//   ngOnInit() {
//     this.renderer.addClass(this.elmRef.nativeElement, 'crazyClass')
//   }
  
// }
