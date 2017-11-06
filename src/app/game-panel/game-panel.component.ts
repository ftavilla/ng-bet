import {Component, OnInit} from "@angular/core";
import {GameService} from "../service/game/game.service";
import {Observable} from "rxjs";
import {Game} from "../shared/Game";
import {Coupon} from "../shared/Coupon";
import {CouponService} from "../service/coupon/coupon.service";

@Component({
  selector: 'game-panel',
  templateUrl: './game-panel.component.html',
  styleUrls: ['./game-panel.component.css']
})
export class GamePanelComponent implements OnInit {

  games: Observable<Game[]>;
  coupon: Coupon;

  constructor(private _gameService: GameService, private _couponService: CouponService) {
  }

  ngOnInit() {
    this.games = this._gameService.findAll();
  }

  public addToCoupon(label: string, odd: number) {
    let coupon: Coupon = {label: label, odd: odd};
    this._couponService.addCoupon(coupon);
  }

}
