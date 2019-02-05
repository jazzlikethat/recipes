import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';

import { RecipesSearchComponent } from './recipes-search/recipes-search.component';
import { RecipesListComponent } from './recipes/recipes.component';

const appRoutes: Routes = [
  { path: 'recipes', component: RecipesListComponent },
  { path: '', component: RecipesSearchComponent }
  // { path: 'recipe', component: RecipeDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecipesSearchComponent,
    RecipesListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
