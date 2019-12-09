import { Component, OnInit, Output } from "@angular/core";
import { AccuWeatherApiCallServiceService } from "src/app/services/accu-weather-api-call-service.service";
import { of } from "rxjs";
import { AutoCompleteData } from "src/app/models/AutoCompleteData";

@Component({
  selector: "app-main-search-screen",
  templateUrl: "./main-search-screen.component.html",
  styleUrls: ["./main-search-screen.component.scss"]
})
export class MainSearchScreenComponent implements OnInit {

  @Output() cityselected: string = "";
  isSearched: boolean = false;
  data: any;
  retdata: any;
  constructor() {}

  ngOnInit() {
    this.cityselected = "";
  }

  
}
