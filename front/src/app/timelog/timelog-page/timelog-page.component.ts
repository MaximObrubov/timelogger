import { Component, OnInit } from '@angular/core';
import { Timelog } from '../../types/Timelog';
import { ApiService } from '../../services/api.service';

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
    this.apiService.list().subscribe(data => {
      console.group('%c Custom log:', 'background: #00A9A5; color: #00D5DB; font-size: 16px;')
      console.log(data)
      console.groupEnd()
      const [logs, count] = data;
      this.timelogs = logs;
    });
  }

}
