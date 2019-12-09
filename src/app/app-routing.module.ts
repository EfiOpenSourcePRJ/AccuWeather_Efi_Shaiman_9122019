import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FavoritesScreenComponent } from './views/favorites-screen/favorites-screen.component';
import { MainSearchScreenComponent } from './views/main-search-screen/main-search-screen.component';
import { SearchByCityPageComponent } from './views/search-by-city-page/search-by-city-page.component';

const appRoutes: Routes = [
  { path: "favorites", component: FavoritesScreenComponent },
  { path: "searchpage", component: SearchByCityPageComponent },
  { path: "", redirectTo: "searchpage", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
