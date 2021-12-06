import * as AppState from  "src/app/state/app-state.model";

export interface UserState {
    currentUsername: string;
    maskUsername: boolean;
}

export interface State extends AppState.State {
    users: UserState;
}