import { Component, OnInit, Input } from '@angular/core';
import { AccuWeatherApiCallServiceService } from 'src/app/services/accu-weather-api-call-service.service';
import { CityWeatherData, CityWeatherDataAdapter } from 'src/app/models/CityWeatherData';

@Component({
  selector: "app-weather-data",
  templateUrl: "./weather-data.component.html",
  styleUrls: ["./weather-data.component.scss"]
})
export class WeatherDataComponent implements OnInit {
  weatherCondition: string;
  temperature: string;
  public isSearched: boolean = false;
  @Input() isHowWeatherWidget ;
  weatherData: CityWeatherData = new CityWeatherData("","");
  constructor(
    private dataProvider: AccuWeatherApiCallServiceService,
    private weatherDataAdapter: CityWeatherDataAdapter
  ) {
    
  }

  ngOnInit() {
    this.isSearched = this.isHowWeatherWidget;
    this.dataProvider.cityWeathersubs.subscribe(data => { 
      if (data.length > 0)
      {
        this.weatherData = this.weatherDataAdapter.adapt(data[0]);
        
        this.dataProvider.cityWeathersubs.next([]);
        this.isSearched = true;
      }
      else
        this.isSearched = false;
     
    });
  }
}
