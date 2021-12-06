import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { FeatureTypes } from "src/app/state/state-features-types";
import {  UserState } from "./user-state.model";
import { UserActions } from "./user.actions";

const initialState:UserState = {
    currentUsername: '',
    maskUsername: false
}

export const usersReducer = createReducer<UserState>(initialState,
    on(UserActions.Login, (state, {username}):UserState => {
        return { 
            currentUsername: username,
            ...state
        }
    })

)

const usersSelector = createFeatureSelector<UserState>(FeatureTypes.Users);
export const usernameSelector = createSelector(usersSelector, (usersState):string=>{
    return usersState.currentUsername;
})

export const maskUsernameSelector = createSelector(usersSelector, (usersState):boolean=>{
    return usersState.maskUsername;
})