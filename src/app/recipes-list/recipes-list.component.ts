import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RecipesService } from './recipes-list.service';
import { Recipe } from './recipe';
import recipes from './recipes-list';

@Component({
  selector: 'app-recipes-container',
  templateUrl: './recipes-list.component.html',
  providers: [ RecipesService ],
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe;
  error: any
  constructor(private recipesService: RecipesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.search(this.route.snapshot.queryParams['search']);
  }

  search(searchTerm: string) {
    if (!searchTerm || searchTerm.trim() === '') {
      this.router.navigate(['/']);
      return;
    }
    this.recipesService.searchRecipes(searchTerm)
      .subscribe(
        response => this.recipes = response['hits'], // success path
        error => this.error = error // error path
      );
    // this.recipes = recipes.hits;
  }

}
