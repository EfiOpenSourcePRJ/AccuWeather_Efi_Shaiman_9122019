import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: "app-favorites-list",
  templateUrl: "./favorites-list.component.html",
  styleUrls: ["./favorites-list.component.scss"]
})
export class FavoritesListComponent implements OnInit {
   favoritesData;
  constructor() {}

  ngOnInit() {
     this.favoritesData = JSON.parse(localStorage.getItem("favorites")) || [];
  }
  
}
