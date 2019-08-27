import { Injectable } from '@angular/core';
import { UtilsService } from '../utilsService/utils.service'
import { BehaviorSubject } from 'rxjs';
import User from '../../models/user';
import * as moment from 'moment'
import Move from '../../models/move';
import Contact from 'src/app/models/contact';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER_KEY: string = 'user'
  user$ = new BehaviorSubject<User>({} as User);
  moves$ = new BehaviorSubject<Move[]>([]);

  currContactId: Contact
  now = moment();

  constructor(private utilService: UtilsService) {
  }


  getUser(contactId) {
    const registerdUser = this.utilService.getFromStorage(this.USER_KEY)
    this.user$.next(registerdUser)
    this.followUserMove(registerdUser, contactId)
  }

  signup(name) {
    const newUser = new User(100, name ,[])
    this.utilService.saveToStorage(this.USER_KEY, newUser)
  }

followUserMove(user, compairToId){
  if(!user) return
  
  if(compairToId){
    const userMoves = user.moves.filter(move => move.toId === compairToId)
    this.moves$.next(userMoves)
  } else {
    this.moves$.next(user.moves)
  }
}
  addMove(contact, amount) {
    const user = this.utilService.getFromStorage(this.USER_KEY)
    const newAmount = user.coins - amount
    if (newAmount >= 0) {
      user.coins = newAmount
    }
    else 
    {
      console.log('Not enough money')
return
    }
    const move = {
      toId: contact._id,
      to: contact.name,
      at: this.now.format("LLLL"),
      amount: amount
    }
    this.currContactId = move.toId
    user.moves.push(move)
    this.utilService.saveToStorage(this.USER_KEY, user)

    this.followUserMove(user, this.currContactId)
  }
  
}
