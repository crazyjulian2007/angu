import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogfacService {

  constructor() { }

  logInfo(obj: string) {
    console.info(obj);
  }
  logException(obj: string) {
    console.error(obj);
  }
  logWarn(obj: string) {
    console.warn(obj);
  }
}
