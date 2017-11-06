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
    this.coupons.next(this.coupons.getValue());
  }

}
