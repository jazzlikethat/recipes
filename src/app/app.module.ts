import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipesDataService } from './recipes-data.service';
import { RecipesSearchComponent } from './recipes-search/recipes-search.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const appRoutes: Routes = [
  { path: 'recipes', component: RecipesListComponent },
  { path: 'recipeDetail', component: RecipeDetailComponent },
  { path: '', component: RecipesSearchComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecipesSearchComponent,
    RecipesListComponent,
    RecipeDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    NgbModule,
    InfiniteScrollModule
  ],
  providers: [RecipesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
