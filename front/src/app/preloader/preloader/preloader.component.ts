import { Component, Input, OnInit } from '@angular/core';
import { PreloaderService } from 'src/app/services/preloader.service';

@Component({
  selector: 'editors-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit {

  _active: boolean = false;

  klass = "preloader";

  @Input() set active(value: boolean) {
    this._active = value;
  }

  @Input() text: string;


  constructor(private preloaderService: PreloaderService) {
    this.text = this.preloaderService.text;
  }

  get active(): boolean {
    return this._active;
  }

  get klasses() {
    return {
      [this.klass]: true,
      [`${this.klass}--active`]: this.active,
    }
  }

  ngOnInit(): void {
  }

}
