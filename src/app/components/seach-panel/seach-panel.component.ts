import { Component, OnInit } from '@angular/core';
import { AccuWeatherApiCallServiceService } from 'src/app/services/accu-weather-api-call-service.service';

@Component({
  selector: "app-seach-panel",
  templateUrl: "./seach-panel.component.html",
  styleUrls: ["./seach-panel.component.scss"]
})
export class SeachPanelComponent implements OnInit {
  retdata: Object | import("c:/accuWeatherAPI/AccuWeatherClient/src/app/models/AutoCompleteData").AutoCompleteData[];
  constructor(private dataProvider: AccuWeatherApiCallServiceService) {}
  autoCompleteLocationText: any;
  ngOnInit() {}

  
  GetAutoComplete(event: any) {
    this.dataProvider
      .GetLocationAutoCopleteFromAccuAPI(this.autoCompleteLocationText)
      .subscribe(),
      err => console.log("HTTP Error", err),
      () => console.log("HTTP request completed.");
  }
}
