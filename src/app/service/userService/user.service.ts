import { Injectable } from '@angular/core';
import { UtilsService } from '../utilsService/utils.service'
import { BehaviorSubject } from 'rxjs';
import User from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  USER_KEY: string = 'user'

  user$ = new BehaviorSubject<User[]>([]);
  user: User = new User()

  constructor(private utilService: UtilsService) { }


  getUser() {
    const registerdUser = this.utilService.getFromStorage(this.USER_KEY)
    this.user$.next(registerdUser)
  }

  signup(name) {
    this.user.name = name
    this.utilService.saveToStorage(this.USER_KEY, this.user)
  }


  addMove(contact, amount) {
    const newAmount = this.user.coins - amount
    if (newAmount >= 0) this.user.coins = newAmount
    else console.log('Not enough money')
    const move = {
      toId: contact._id,
      to: contact.name,
      at: Date.now(),
      amount: amount
    }
    this.user.moves.push(move)
  }

}
