import { Component, OnInit } from '@angular/core';
import {DayTime } from '../../types/DayTime';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  // TODO: take from user settings
  public dayTime: DayTime = {start: "08:00", end: "16:30"};
  public pauseTime: DayTime = {start: "12:00", end: "12:30"};
  public toLog?: number;
  private today: Date;

  constructor() {
    this.today = new Date();
   }

  ngOnInit(): void {
  }

  onSubmit(event: Event) {
    event.preventDefault();




    console.group('%c Custom log:', 'background: #00A9A5; color: #00D5DB; font-size: 16px;')
    console.log(this.dayTime, this.pauseTime, this.today)
    console.groupEnd()

  }

  get duration() {
    return this.getMinutes(this.dayTime.end) - this.getMinutes(this.dayTime.start) - (this.getMinutes(this.pauseTime.end) - this.getMinutes(this.pauseTime.start))
  }
  get todayDate() {
    return this.today.toLocaleDateString();
  }

  private getMinutes(time: string) {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  }

}
