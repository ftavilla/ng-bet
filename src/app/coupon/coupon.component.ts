import {Component, OnInit} from "@angular/core";
import {CouponService} from "../service/coupon/coupon.service";
import {Coupon} from "../shared/Coupon";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  coupons: BehaviorSubject<Array<Coupon>>;

  constructor(private _couponService: CouponService) {
  }

  ngOnInit() {
    this.coupons = this._couponService.coupons;
  }

  removeCoupon(coupon: Coupon) {
    this._couponService.removeCoupon(coupon);
  }

}
