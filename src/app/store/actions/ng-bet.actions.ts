import {Action} from "@ngrx/store";
import {NgBetState} from "../states/ng-bet.state";
import {Coupon} from "../../shared/Coupon";

export const ngBetActions = {
  UpdateGameQuantityAction: '[Ng-Bet] Update Game Quantity Action',
  AddCouponAction: '[Ng-Bet] Add Coupon Action'
};

export class UpdateGameQuantity implements Action {
  type: string = ngBetActions.UpdateGameQuantityAction;
  payload: NgBetState;

  constructor(quantity: number) {
    this.payload = <NgBetState>{
      selectedGameQuantity: quantity
    };
  }
}

export class AddCoupon implements Action {
  type: string = ngBetActions.AddCouponAction;
  payload: NgBetState;

  constructor(coupon: Coupon) {
    this.payload = <NgBetState>{
      coupons: [coupon]
    };
  }
}

export type NgBetAction = UpdateGameQuantity | AddCoupon;
