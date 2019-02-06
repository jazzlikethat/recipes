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

    setRecipesList(recipes: Recipe[]) {
        this.recipesList.length = 0;
        this.recipesList = [...recipes];
    }

    getRecipesList() {
        return this.recipesList;
    }
}
