import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Game} from "../../shared/Game";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class GameService {

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Game[]> {
    return this.http.get<Game[]>('api/game.json');
  }

}
