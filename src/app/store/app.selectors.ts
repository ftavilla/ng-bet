import {createFeatureSelector, createSelector} from "@ngrx/store";
import {NgBetState} from "./states/ng-bet.state";

export const getGameState = createFeatureSelector<NgBetState>('ng-bet');
export const getGameQuantity = createSelector(getGameState, (state: NgBetState) => state.selectedGameQuantity);
export const getCoupon = createSelector(getGameState, (state: NgBetState) => state.coupons);
