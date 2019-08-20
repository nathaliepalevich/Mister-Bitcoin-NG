import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  saveToStorage(name, value) {
    console.log('saveToStorage', value);

    localStorage.setItem(name, JSON.stringify(value));
  }

  getFromStorage(name) {
    const res = localStorage.getItem(name);
    const res1 = JSON.parse(res)
    console.log('getFromStorage', res1);
    return res1
  }
  constructor() { }
}
