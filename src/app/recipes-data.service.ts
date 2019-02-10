import { Recipe } from './recipes-list/recipe';

export class RecipesDataService {
    searchTerm: string = "";
    curRecipeIndex: number = 0;
    recipesList: Recipe[] = [];

    setSearchTerm(term: string) {
        this.searchTerm = term;
    }

    getSearchTerm() {
        return this.searchTerm;
    }

    setCurRecipeIndex(num: number) {
        this.curRecipeIndex = num;
    }

    getCurRecipeIndex() {
        return this.curRecipeIndex;
    }

    resetRecipesList(){
        this.recipesList.length = 0;
    }

    setRecipesList(recipes: Recipe[]) {
        Array.prototype.push.apply(this.recipesList, recipes);
    }

    getRecipesList() {
        return this.recipesList;
    }
}
