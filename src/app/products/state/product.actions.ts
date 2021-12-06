import { ActionCreator, createAction } from "@ngrx/store";

export class ProductActionTypes {
    static ToggleCodeVisibility:string = '[Product] Toggle Product Code Visibility';
}

export class ProductActions{
    static ToggleCodeVisibility:ActionCreator = createAction(ProductActionTypes.ToggleCodeVisibility);
}