import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';

import recipes from './recipes';

@Component({
  selector: 'app-recipes-container',
  templateUrl: './recipes.component.html',
  providers: [ RecipesService ],
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

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
