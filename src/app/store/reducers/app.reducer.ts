import {ActionReducerMap} from "@ngrx/store";
import {ngBetReducer} from "./ng-bet.reducer";
import {AppState} from "../states/app.state";

export const reducers: ActionReducerMap<AppState> = {
  ngBet: ngBetReducer
};