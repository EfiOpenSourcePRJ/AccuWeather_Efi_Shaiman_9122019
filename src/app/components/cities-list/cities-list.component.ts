import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { AccuWeatherApiCallServiceService } from 'src/app/services/accu-weather-api-call-service.service';

@Component({
  selector: "app-cities-list",
  templateUrl: "./cities-list.component.html",
  styleUrls: ["./cities-list.component.scss"]
})
export class CitiesListComponent implements OnInit {
  retdata;

  public isShowLabel: boolean = false;
  constructor(private dataProvider: AccuWeatherApiCallServiceService) {}
  ngOnInit() {
   
    this.dataProvider.autoCompletesubs.subscribe(data => {
      if (data.length > 0) {
        this.isShowLabel = true;
        this.retdata = data;
      } else this.isShowLabel = false;
    });
  }


  
}

