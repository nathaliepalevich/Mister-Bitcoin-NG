import Move from './move'

export default class User {

     _id?: string;
     img?: string;

     constructor(
          public coins: number ,
          public name: string,
          public moves: Array<Move>
     ) { }

     public setId?() {
          this._id = this._makeId();
     }

     private _makeId?(length = 10) {
          let txt = ''
          const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
          for (let i = 0; i < length; i++) {
               txt += possible.charAt(Math.floor(Math.random() * possible.length))
          }
          return txt
     }

     imgUrl?() {
          return `https://robohash.org/${this.name}.png`;
     }

}