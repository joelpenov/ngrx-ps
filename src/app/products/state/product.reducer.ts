import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { FeatureTypes } from "src/app/state/state-features-types";
import { ProductState } from "./product-state.model";
import {ProductActions} from "./product.actions";

const productInitialState:ProductState = {
    showProductCode:true,
    currentProctId: 0,
    products: []
};

export const productReducer = createReducer<ProductState>(
    productInitialState,
    on(ProductActions.ToggleCodeVisibility, (state):ProductState =>{
        console.log(state)
        return {
            ...state,
            showProductCode: !state.showProductCode,
        }
    }))

    const productsSelector = createFeatureSelector<ProductState>(FeatureTypes.Products);

    export const showProductCode = createSelector(productsSelector, (productState:ProductState):boolean=>{
        return productState.showProductCode;
    })
   