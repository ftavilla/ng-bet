import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {GamePanelComponent} from "./game-panel/game-panel.component";
import {GameService} from "./service/game/game.service";
import {HttpClientModule} from "@angular/common/http";
import {CouponComponent} from "./coupon/coupon.component";
import {CouponService} from "./service/coupon/coupon.service";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

@NgModule({
  declarations: [
    AppComponent,
    GamePanelComponent,
    CouponComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({maxAge: 25})
  ]
  ,
  providers: [
    GameService,
    CouponService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
