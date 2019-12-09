import { Adapter } from "../core/adapter";
import { Injectable } from "@angular/core";



export class AutoCompleteData {
  constructor(key: string, localizedName: string, country: string) {
    this.Key = key;
    this.LocalizedName = localizedName;
    this.Country = country;
  }
  Key: string;
  LocalizedName: string;
  Country: string;
}

@Injectable({
  providedIn: "root"
})
export class AutoCompleteAdapter implements Adapter<AutoCompleteData> {
  adapt(item: any): AutoCompleteData {
    return new AutoCompleteData(
      item.Key,
      item.LocalizedName,
      item.Country.LocalizedName
    );
  }
}
