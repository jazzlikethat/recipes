import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RecipesDataService } from '../recipes-data.service';

@Component({
  selector: 'app-recipes-search',
  templateUrl: './recipes-search.component.html',
  styleUrls: ['./recipes-search.component.scss']
})
export class RecipesSearchComponent implements OnInit {

  searchTerm: string = "";
  constructor(private router: Router,
              private recipesDataService: RecipesDataService) { }

  ngOnInit() {
  }

  onKeyUp(event: any) { // without type info
    if (event.keyCode !== 13) {
      return;
    }
    this.searchRecipes();
  }

  searchRecipes(term?: string) {
    
    // Sample button takes priority even if something is present in the search field
    if (term) {
      this.searchTerm = term;
    }

    if (this.searchTerm.trim() === '') {
      return;
    }
    this.recipesDataService.setSearchTerm(this.searchTerm);
    this.router.navigate(['/recipes']);
  }

}
