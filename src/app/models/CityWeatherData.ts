import { Injectable } from '@angular/core';
import { Adapter } from '../core/adapter';


       

export class CityWeatherData {
         constructor( weatherText: string, temperature: string) {
           this.weatherText = weatherText;
           this.temperature = temperature;
         }
      
  
         weatherText: string;
         temperature: string;
       }

@Injectable({
  providedIn: "root"
})
export class CityWeatherDataAdapter implements Adapter<CityWeatherData> {
  adapt(item: any): CityWeatherData {
    return new CityWeatherData(
      item.WeatherText,
      item.Temperature.Metric.Value
    );
  }
}