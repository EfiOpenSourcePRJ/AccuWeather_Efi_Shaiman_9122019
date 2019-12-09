import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

import { MainSearchScreenComponent } from "./views/main-search-screen/main-search-screen.component";
import { FavoritesScreenComponent } from "./views/favorites-screen/favorites-screen.component";
import { FavouriteButtonComponent } from "./components/favourite-button/favourite-button.component";
import { MatButtonModule } from "@angular/material";
import { MatIconModule } from "@angular/material";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { WeatherDataComponent } from './components/weather-data/weather-data.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SeachPanelComponent } from './components/seach-panel/seach-panel.component';

import { SearchByCityPageComponent } from './views/search-by-city-page/search-by-city-page.component';
import { CitiesListComponent } from './components/cities-list/cities-list.component';
import { FavoritesListComponent } from './components/favorites-list/favorites-list.component';


@NgModule({
  declarations: [
    MainSearchScreenComponent,
    FavoritesScreenComponent,
    FavouriteButtonComponent,
    WeatherDataComponent,
    PageNotFoundComponent,
    SeachPanelComponent,
    CitiesListComponent,
    SearchByCityPageComponent,
    FavoritesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [MainSearchScreenComponent]
})
export class AppModule {}
