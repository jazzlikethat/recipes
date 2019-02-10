import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RecipesService } from './recipes-list.service';
import { RecipesDataService } from '../recipes-data.service';
import { Recipe } from './recipe';
// import recipes from './recipes-list';

@Component({
  selector: 'app-recipes-container',
  templateUrl: './recipes-list.component.html',
  providers: [ RecipesService ],
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  searchTerm: string = "";
  recipes: Recipe[] = [];
  error: any;
  fetchingRecipes: boolean = false;
  infiniteScrollDisabled: boolean = true;
  startIndex: number = 0;

  constructor(private recipesService: RecipesService,
              private recipesDataService: RecipesDataService,
              private router: Router) { }

  ngOnInit() {
    let searchTerm = this.recipesDataService.getSearchTerm();
    if (!searchTerm || searchTerm.trim() === '') {
      this.router.navigate(['/']);
      return;
    }
    this.searchTerm = searchTerm;
    this.searchRecipes();
  }

  onKeyUp(event: any) { // without type info
    if (event.keyCode !== 13) {
      return;
    }
    this.searchRecipes();
  }

  searchRecipes() {
    if (!this.searchTerm || this.searchTerm.trim() === '') {
      return;
    }

    // For every new recipe search, reset all the variables
    this.recipes.length = 0;
    this.recipesDataService.resetRecipesList();
    this.startIndex = 0;

    this.fetchRecipes();
  }

  // call the api
  fetchRecipes() {
    this.recipesDataService.setSearchTerm(this.searchTerm);
    this.fetchingRecipes = true;
    this.recipesService.searchRecipes(this.searchTerm, this.startIndex)
      .subscribe(
        response => {
          Array.prototype.push.apply(this.recipes, response['hits']);
          this.infiniteScrollDisabled = !response['more'];
          this.startIndex += 10;
          this.recipesDataService.setRecipesList(this.recipes);
          this.fetchingRecipes = false;
        }, // success path
        error => this.error = error // error path
      );
  }

  openRecipeDetail(index: number) {
    this.recipesDataService.setCurRecipeIndex(index);
    this.router.navigate(['/recipeDetail']);
  }

  onScroll() {
    if (this.fetchingRecipes) {
      return;
    }

    this.fetchRecipes();
  }

}
