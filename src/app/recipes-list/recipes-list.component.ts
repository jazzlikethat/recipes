import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes-list.service';

import recipes from './recipes-list';

@Component({
  selector: 'app-recipes-container',
  templateUrl: './recipes-list.component.html',
  providers: [ RecipesService ],
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  recipes: any;
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.search('chicken');
  }

  search(searchTerm: string) {
    // if (searchTerm) {
    //   this.recipesService.searchRecipes(searchTerm)
    //     .subscribe(recipes => this.populateRecipes(recipes));
    // }
    this.recipes = recipes.hits;
  }

  populateRecipes(recipes: any) {
    this.recipes = recipes.hits;
  }

}
