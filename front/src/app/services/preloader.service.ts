import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreloaderService {

  public defaultText = "Loading...";
  private _text: string | undefined;

  private _active = false;

  constructor() { }

  get active() {
    return this._active;
  }

  get text() {
    return this._text ? this._text : this.defaultText;
  }

  /**
   * Start to demonstrate preloader
   * @param text - text to be should on preloader plate, if not passed the default text is shown
   */
  start(text?: string) {
    this._active = true;
    if (text) this._text = text;
  }

  stop() {
    this._active = false;
    this._text = undefined;
  }
}
