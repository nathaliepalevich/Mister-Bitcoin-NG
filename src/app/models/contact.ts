export default class Contact {
  _id?: string;
  img?: string;
  isClicked?: boolean = false;

  constructor(
    public name: string = "",
    public email: string = "",
    public phone: string = ""
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

  public goToContact?() {
    console.log('goToContact: isClicked ', this.isClicked);

    this.isClicked = !this.isClicked
  }

}