export class Recipe {
  constructor(
    public name: string,
    public ingredients: Array<string>,
    public image: string,
    public vegeterian: boolean
  ) {}
};

export const initialRecipe: Recipe = {
  name: '',
  ingredients: [''],
  image: '',
  vegeterian: false
};
