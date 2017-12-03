import {NgBetState} from "../states/ng-bet.state";
import {NgBetAction, ngBetActions} from "../actions/ng-bet.actions";

const initialState: NgBetState = {
  selectedGameQuantity: 0,
  coupons: []
};

export function ngBetReducer(state = initialState, action: NgBetAction): NgBetState {
  switch (action.type) {
    case ngBetActions.UpdateGameQuantityAction:
    case ngBetActions.AddCouponAction: {
      return Object.assign({}, state, {coupons: [...state.coupons, ...action.payload.coupons]});
    }

    default:
      return state;
  }
}

