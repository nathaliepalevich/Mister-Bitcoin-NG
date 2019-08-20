import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { UtilsService } from '../utilsService/utils.service'

import Charts from '../../models/charts';
import BtcRate from 'src/app/models/btcRate';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient, private utilsService: UtilsService) { }

  MARKET_PRICE = 'marketPrice'
  CONFIRMED_TRANS = 'ConfirmedTransactions'

  marketprice$ = new BehaviorSubject<Charts[]>([])
  confirmedTrans$ = new BehaviorSubject<Charts[]>([])
  btcRate$ = new BehaviorSubject<BtcRate[]>([])

  marketprice: Charts
  confirmedTrans: Charts

  getRate(user) {
    return this.http.get(`https://blockchain.info/tobtc?currency=USD&value=${user.coins}`)
      .subscribe((btcRate: BtcRate[]) => {
        this.btcRate$.next(btcRate)
      })


  }

  getMarketPrice() {

    const marketprice = this.utilsService.getFromStorage(this.MARKET_PRICE)
    this.marketprice$.next(marketprice)

    return this.http.get(`https://api.blockchain.info/charts/market-price?timespan=30days&format=json&cors=true`)
      .subscribe((marketprice: Charts[]) => {
        this.marketprice$.next(marketprice)
        this.utilsService.saveToStorage(this.MARKET_PRICE, marketprice)
      })
  }

  getConfirmedTransactions() {
    const confirmedTrans = this.utilsService.getFromStorage(this.CONFIRMED_TRANS)
    this.confirmedTrans$.next(confirmedTrans)

    return this.http.get(`https://api.blockchain.info/charts/n-transactions?timespan=30days&format=json&cors=true`)
      .subscribe((confirmedTrans: Charts[]) => {
        this.confirmedTrans$.next(confirmedTrans)
        this.utilsService.saveToStorage(this.CONFIRMED_TRANS, confirmedTrans)
      })
  }

}

/* BEFORE CHANGING TO OBSERVABLE / SUBJECTS

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import MarketPrice from '../../models/marketPrice'
import ConfirmedTransactions from 'src/app/models/confirmedTransactions';
import MarketValue from '../../models/marketPrice';
import TransactionsValue from 'src/app/models/confirmedTransactions';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }

  MARKET_PRICE = 'marketPrice'
  CONFIRMED_TRANS = 'ConfirmedTransactions'


  marketprice: MarketPrice
  confirmedTrans: ConfirmedTransactions

  //  getRate(coins) {
  //   const rateRes = await this.http.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
  //     .toPromise()
  //   console.log('rateRes', rateRes);
  //   return rateRes

  // }

  getMarketPrice() {
    if (this.marketprice) return this.marketprice

    return this.http.get(`https://api.blockchain.info/charts/market-price?timespan=30days&format=json&cors=true`)
      .toPromise()
      .then((res: MarketPrice) => {
        this.marketprice = res
        this.marketprice.values = res.values.map((data: MarketValue) => data.y)
        this.saveToStorage(this.MARKET_PRICE, res)
        return this.marketprice
      })
  }

  getConfirmedTransactions() {
    if (this.confirmedTrans) return this.confirmedTrans

    return this.http.get(`https://api.blockchain.info/charts/n-transactions?timespan=30days&format=json&cors=true`)
      .toPromise()
      .then((res: ConfirmedTransactions) => {
        this.confirmedTrans = res
        this.confirmedTrans.values = res.values.map((data: TransactionsValue) => data.y)
        this.saveToStorage(this.CONFIRMED_TRANS, res)
        return this.confirmedTrans
      })
  }

  saveToStorage(name, value): void {
    this.marketprice = this.getFromStorage(this.MARKET_PRICE)
    localStorage.setItem(name, JSON.stringify(value));
  }

  getFromStorage(name): any {
    const res = localStorage.getItem(name);
    return JSON.parse(res)
  }
}

*/