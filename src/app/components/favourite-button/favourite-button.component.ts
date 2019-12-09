import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AccuWeatherApiCallServiceService } from 'src/app/services/accu-weather-api-call-service.service';

@Component({
  selector: "app-favourite-button",
  templateUrl: "./favourite-button.component.html",
  styleUrls: ["./favourite-button.component.scss"]
})
export class FavouriteButtonComponent implements OnInit {
  @Input() cityKey: string;
  @Input() selected: boolean = false;
  @Input() country: string;
  @Input() citiName: string;
  @Output() selectedChange = new EventEmitter<boolean>();
  favorites: any[];

  constructor(private dataProvider: AccuWeatherApiCallServiceService) {}

  ngOnInit() {
    this.favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let index = this.favorites
      .map(function(e) {
        return e.key;
      })
      .indexOf(this.cityKey);
    //this.favorites.indexOf(this.cityKey);
    if (index != -1) {
      this.selected = true;
      this.selectedChange.emit(this.selected);
    }
  }

  public toggleSelected() {
    this.favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    let index = this.favorites
      .map(function(e) {
        return e.key;
      })
      .indexOf(this.cityKey);
  
    var ind =Object.values(this.favorites).indexOf(this.cityKey);
    this.selected = !this.selected;
    if (this.selected) {
      if (index === -1 && this.cityKey != "undefined")
       
            this.favorites.push({
              key: this.cityKey,
              country: this.country,
              cityName: this.citiName
            });
    } else {
      this.favorites.splice(index, 1);
    }
    this.selectedChange.emit(this.selected);
    localStorage.setItem("favorites", JSON.stringify(this.favorites));
  }

  SearchWeatherByKey() {
    this.dataProvider.SearchWeatherDataByKey(this.cityKey).subscribe(),
      err => console.log("HTTP Error", err),
      () => console.log("HTTP request completed.");
  }
}
