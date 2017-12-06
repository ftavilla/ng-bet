import {Component, OnInit} from "@angular/core";
import {GameService} from "../service/game/game.service";
import {Observable} from "rxjs";
import {Game} from "../shared/Game";
import {Coupon} from "../shared/Coupon";
import {Store} from "@ngrx/store";
import {AppState} from "../store/states/app.state";
import {AddCoupon} from "../store/actions/ng-bet.actions";

@Component({
  selector: 'game-panel',
  templateUrl: './game-panel.component.html',
  styleUrls: ['./game-panel.component.css']
})
export class GamePanelComponent implements OnInit {

  games: Observable<Game[]>;

  constructor(private _gameService: GameService,
              private _store: Store<AppState>) {
  }

  ngOnInit() {
    this.games = this._gameService.findAll();
  }

  public addToCoupon(label: string, odd: number) {
    let coupon: Coupon = {label: label, odd: odd};
    this._store.dispatch(new AddCoupon(coupon));
  }

}
