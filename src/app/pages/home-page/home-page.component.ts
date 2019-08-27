import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/userService/user.service';
import { BitcoinService } from '../../service/bitcoinService/bitcoin.service';
import { ActivatedRoute, Router } from '@angular/router';

import User from 'src/app/models/user';
import BtcRate from 'src/app/models/btcRate';
import Move from 'src/app/models/move';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  user: User
  btc: BtcRate[]
  moves: Move[] = []
  constructor(private userService: UserService, private bitcoinservice: BitcoinService, private router: Router) { }

  ngOnInit() {
    this.userService.user$.subscribe(registerdUser => {
      this.user = registerdUser
    })
    this.userService.getUser('')

      if (!this.user) {
        this.router.navigateByUrl('/signup');
        return
      }
    this.bitcoinservice.btcRate$.subscribe(btc => {
      this.btc = btc
    })

    this.userService.moves$.subscribe(movesToShow => this.moves = movesToShow)


    this.bitcoinservice.getRate(this.user)

  }

}
