import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { of, Observable, BehaviorSubject } from "rxjs";
import { environment } from "../../environments/environment";
import {
  AutoCompleteData,
  AutoCompleteAdapter
} from "../models/AutoCompleteData";
import { CityWeatherData, CityWeatherDataAdapter } from '../models/CityWeatherData';
@Injectable({
  providedIn: "root"
})
export class AccuWeatherApiCallServiceService {
  public autoCompletesubs: BehaviorSubject<Object[]> = new BehaviorSubject([]);
  public cityWeathersubs: BehaviorSubject<Object[]> = new BehaviorSubject([]);
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(
    private http: HttpClient,
    private autoCompleteadapter: AutoCompleteAdapter,
    private weatherDataAdapter: CityWeatherDataAdapter
  ) {}

  public GetLocationAutoCopleteFromAccuAPI(locationText: string) {
    //return
    // of([
    //   {
    //     Version: 1,
    //     Key: "213181",
    //     Type: "City",
    //     Rank: 31,
    //     LocalizedName: "Haifa",
    //     Country: { ID: "IL", LocalizedName: "Israel" },
    //     AdministrativeArea: { ID: "HA", LocalizedName: "Haifa" }
    //   },
    //   {
    //     Version: 1,
    //     Key: "2589281",
    //     Type: "City",
    //     Rank: 85,
    //     LocalizedName: "Haifang Township",
    //     Country: { ID: "CN", LocalizedName: "China" },
    //     AdministrativeArea: { ID: "SD", LocalizedName: "Shandong" }
    //   }
    // ]).pipe(
    //   map((data: Array<any>) => {
    //     data.map(item => this.autoCompleteadapter.adapt(item));
    //     this.autoCompletesubs.next(data);
    //   })
    // );
   return this.http
      .get<Array<AutoCompleteData>>(
        environment.LocationAutoComplete_API_URL +
          "?apikey=" +
          environment.API_Key +
          "&q=" +
          locationText
      )
      .pipe(
        map((data: Array<AutoCompleteData>) => {
          data.map(item => this.autoCompleteadapter.adapt(item));
          this.autoCompletesubs.next(data);
        })
      )
      .pipe(catchError(this.handleCallError<Object>("error in html call : ")));
  }

  SearchWeatherDataByKey(key: any) {
    //return
    // of([
    //   {
    //     LocalObservationDateTime: "2019-12-08T13:45:00+02:00",
    //     EpochTime: 1575805500,
    //     WeatherText: "Mostly cloudy",
    //     WeatherIcon: 6,
    //     HasPrecipitation: false,
    //     PrecipitationType: null,
    //     IsDayTime: true,
    //     Temperature: {
    //       Metric: { Value: 20.0, Unit: "C", UnitType: 17 },
    //       Imperial: { Value: 68.0, Unit: "F", UnitType: 18 }
    //     },
    //     MobileLink:
    //       "http://m.accuweather.com/en/il/haifa/213181/current-weather/213181?lang=en-us",
    //     Link:
    //       "http://www.accuweather.com/en/il/haifa/213181/current-weather/213181?lang=en-us"
    //   }
    // ]).pipe(
    //     map((swdata: Array<any>) => {
    //       swdata.map(item => this.weatherDataAdapter.adapt(item));
    //       this.cityWeathersubs.next(swdata);
    //     })
    //   )
    //   ;
   return  this.http
      .get<Array<CityWeatherData>>(
        environment.CurrentCoditions_API_URL +
          key +
          "?apikey=" +
          environment.API_Key
   ).pipe(
       map((data: Array<CityWeatherData>) => {
         data.map(item => this.weatherDataAdapter.adapt(item));
         this.cityWeathersubs.next(data);
       })
     )
     .pipe(catchError(this.handleCallError<Object>("error in html call : ")));
  }

  private handleCallError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
