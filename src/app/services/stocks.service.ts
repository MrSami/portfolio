import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService} from './config.service';
import { Stock} from './stocks.model';

@Injectable()
export class StocksService {

  constructor( private httpService : HttpClient) { }

  getStocks()  {
    return this.httpService.get<Array<Stock>>(ConfigService.get('api'));
  }

}



