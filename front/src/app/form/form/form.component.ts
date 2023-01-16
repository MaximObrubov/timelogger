import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Timelog } from 'src/app/types/Timelog';
import {DayTime } from '../../types/DayTime';
import {Router} from "@angular/router"

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

  constructor(
    private apiService: ApiService,
    // TODO: better to trigger event and redirect from parent page component
    private router: Router
  ) {
    this.today = new Date();
  }

  ngOnInit(): void {
  }

  onSubmit(event: Event) {
    event.preventDefault();

    const timelog: Timelog = {
      start: this.getTime(this.dayTime.start),
      end: this.getTime(this.dayTime.end),
      pauseStart: this.getTime(this.pauseTime.start),
      pauseEnd: this.getTime(this.pauseTime.end),
    }

    this.apiService.create(timelog).subscribe((res) => {
      this.router.navigate(['/list'])
    }, (err) => {
      alert(err);
      console.log(err);
    })
  }

  get duration() {
    return this.getMinutes(this.dayTime.end) - this.getMinutes(this.dayTime.start) - (this.getMinutes(this.pauseTime.end) - this.getMinutes(this.pauseTime.start))
  }
  get todayDate() {
    return this.today.toLocaleDateString();
  }

  /**
   * converts time  to amount of minutes from beginning of the day
   *
   * @param   {string}  time  time in format hh:mm
   * @return  {[number]}      amount of minutes from beginning of the day
   */
  private getMinutes(time: string): number {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  }

  private getTime(time: string) {
    return new Date(this.today.getTime() + this.getSecs(this.dayTime.start)).toISOString();
  }

  /**
   * returns an amount of milliseconds from beginnig of the day
   *
   * @param   {string}  time  time in format hh:mm
   * @return  {number}        amount of milliseconds from beginning of the day
   */
  private getSecs(time: string): number {
    return this.getMinutes(time) * 60 * 1000;
  }

}
