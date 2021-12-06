import { createAction, props } from "@ngrx/store";

export class UserActionTypes {
    static Login:string = "[Users] Login";
    static MaskUsername:string = "[Users] Toggle mask username";
}

export class UserActions {
    static Login = createAction(UserActionTypes.Login, props<{ username: string }>());
    static MaskUsername = createAction(UserActionTypes.MaskUsername);
}