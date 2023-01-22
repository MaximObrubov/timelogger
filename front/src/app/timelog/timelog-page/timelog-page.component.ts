import { Component, OnInit } from '@angular/core';
import { Timelog } from '../../types/Timelog';
import { ApiService } from '../../services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-timelog-page',
  templateUrl: './timelog-page.component.html',
  styleUrls: ['./timelog-page.component.scss']
})
export class TimelogPageComponent implements OnInit {

  timelogs: Timelog[] = [];

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.apiService.list().subscribe((data: any) => {
      const [logs, count] = data;
      this.timelogs = logs;
    });
  }

  onDelete(tl: Timelog) {
    this.apiService.delete(tl.id as number).subscribe((data: any) => {
      this.timelogs = this.timelogs.filter(t => t.id !== tl.id);
    });
  }

  day(dateString: string) {
    const [day, time] = new Date(dateString).toISOString().split("T");
    return day;
  }

  time(dateString: string) {
    const [day, time] = new Date(dateString).toISOString().split("T");
    const [hours, minutes, ...rest] = time.split(":");
    return `${hours}:${minutes}`;
  }

  summary(timelog: Timelog) {
    const day = {
      start: new Date(timelog.start),
      end: new Date(timelog.end),
    };
    const pause = {
      start: new Date(timelog.pauseStart),
      end: new Date(timelog.pauseEnd),
    };
    const pauseLength = (pause.end.getTime() - pause.start.getTime()) / 1000;
    const dayLength = (day.end.getTime() - day.start.getTime()) / 1000;

    return `${((dayLength - pauseLength) / 3600).toFixed(2)}h (${(pauseLength / 60).toFixed(0)}min pause)`
  }

  get apiPath() {
    return [environment.API_HOST, "timelogs"].join("/");
  }

}
