import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Coupon} from "../../shared/Coupon";

@Injectable()
export class CouponService {

  coupons: BehaviorSubject<Coupon[]> = new BehaviorSubject([]);

  constructor() {
  }

  addCoupon(coupon: Coupon) {
    let coupons = this.coupons.getValue();
    coupons.push(coupon);
    this.coupons.next(coupons);
  }

  removeCoupon(coupon: Coupon) {
    let coupons = this.coupons.getValue();
    coupons.splice(coupons.indexOf(coupon), 1);
    this.coupons.next(coupons);
  }

}
