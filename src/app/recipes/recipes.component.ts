import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  providers: [ RecipesService ],
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[];
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.search('chicken');
  }

  search(searchTerm: string) {
    if (searchTerm) {
      this.recipesService.searchRecipes(searchTerm)
        .subscribe(recipes => this.recipes = recipes);
    }
  }

}
