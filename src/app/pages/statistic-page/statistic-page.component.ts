import { Component, OnInit, Input } from '@angular/core';
import { BitcoinService } from '../../service/bitcoinService/bitcoin.service'
import Charts from 'src/app/models/charts';

@Component({
  selector: 'statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {

  constructor(public bitcoinService: BitcoinService) { }

  marketprice: Charts[] = []
  confirmedTransactions: Charts[] = []

  getMarketPrice() {

    this.bitcoinService.marketprice$.subscribe(marketprice => {
      this.marketprice = marketprice
    })
    this.bitcoinService.getMarketPrice();
  }

  getConfirmedTransactions() {
    this.bitcoinService.confirmedTrans$.subscribe(confirmedTrans => {
      this.confirmedTransactions = confirmedTrans
    })
    this.bitcoinService.getConfirmedTransactions();
  }
  ngOnInit() {
    this.getMarketPrice()
    this.getConfirmedTransactions()
  }

}
