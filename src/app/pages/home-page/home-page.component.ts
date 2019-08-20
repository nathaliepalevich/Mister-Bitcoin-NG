import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/userService/user.service';
import { BitcoinService } from '../../service/bitcoinService/bitcoin.service';
import { ActivatedRoute, Router } from '@angular/router';

import User from 'src/app/models/user';
import BtcRate from 'src/app/models/btcRate';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  user: User[]
  btc: BtcRate[]
  constructor(private userservice: UserService, private bitcoinservice: BitcoinService, private router: Router) { }

  ngOnInit() {
    this.userservice.user$.subscribe(registerdUser => {
      this.user = registerdUser
    })

    this.bitcoinservice.btcRate$.subscribe(btc => {
      this.btc = btc
    })

    this.userservice.getUser()

    if (!this.user) {
      this.router.navigateByUrl('/signup');
      return
    }

    this.bitcoinservice.getRate(this.user)

  }

}
