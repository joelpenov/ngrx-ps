import { Product } from "../product";
import * as AppState from "../../state/app-state.model";

export interface ProductState {
    showProductCode:boolean;
    currentProctId:number;
    products:Product[];
} 

export interface State extends AppState.State {
    products:ProductState;
}