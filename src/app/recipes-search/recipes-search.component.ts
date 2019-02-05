import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes-search',
  templateUrl: './recipes-search.component.html',
  styleUrls: ['./recipes-search.component.scss']
})
export class RecipesSearchComponent implements OnInit {

  searchTerm: string = "";
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onKeyUp(event: any) { // without type info
    if (event.keyCode !== 13) {
      return;
    }
    this.searchRecipes();
  }

  searchRecipes() {
    if (this.searchTerm.trim() === '') {
      return;
    }
    this.router.navigate(['/recipes'], { queryParams: { search: this.searchTerm } });
  }

}
