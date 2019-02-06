import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RecipesDataService } from '../recipes-data.service';
import { Recipe } from '../recipes-list/recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  searchTerm: string = "";
  recipesList: Recipe[];
  curRecipe: object = {};

  constructor(private router: Router,
              private recipesDataService: RecipesDataService) { }

  ngOnInit() {
    this.searchTerm = this.recipesDataService.getSearchTerm();
    this.recipesList = this.recipesDataService.getRecipesList();
    if (this.recipesList.length === 0) {
      this.router.navigate(['/']);
      return;
    }
    let index = this.recipesDataService.getCurRecipeIndex();
    this.curRecipe = this.recipesList[index]['recipe'];
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
    this.recipesDataService.setSearchTerm(this.searchTerm);
    this.router.navigate(['/recipes']);
  }

}
