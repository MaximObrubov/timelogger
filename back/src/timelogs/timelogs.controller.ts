import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param,
  Header,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { TimelogsService } from './timelogs.service';
import { CreateTimelogDto } from './dto/create-timelog.dto';
import { UpdateTimelogDto } from './dto/update-timelog.dto';
import { Timelog } from './entities/timelog.entity';

@Controller('timelogs')
export class TimelogsController {
  constructor(private readonly timelogsService: TimelogsService) { }

  @Post()
  create(@Body() createTimelogDto: CreateTimelogDto) {
    return this.timelogsService.create(createTimelogDto);
  }

  @Get()
  findAll() {
    return this.timelogsService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTimelogDto: UpdateTimelogDto) {
    return this.timelogsService.update(+id, updateTimelogDto);
  }

  @Get('export.csv')
  @Header('Content-Type', 'application/octet-stream')
  async export() {
    const [timelogs, count] = await this.timelogsService.findAll();
    const headings = Object.keys(timelogs[0]);
    let csv = [headings.join(",")];
    const lines = timelogs.map(this.timelogCSVLine.bind(this));
    // @ts-ignore
    csv = [...csv, ...lines];
    return csv.join("\n\r");
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.timelogsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.timelogsService.remove(+id);
  }

  private timelogCSVLine(tl: Timelog): string  {
    const { id, start, end, pauseStart, pauseEnd } = tl;
    const [hours, minutes, date] = this.parseTs(start, true);
    return [
      id,
      date,
      hours + ":" + minutes,
      this.parseTs(end).join(":"),
      this.parseTs(pauseStart).join(":"),
      this.parseTs(pauseEnd).join(":"),
    ].join(",")
  }

  private parseTs(ts: Date, withDate = false) {
    const [date, time] = ts.toISOString().split("T");
    const [hours, minutes] = time.split(":");
    return withDate ? [hours, minutes, date] : [hours, minutes];
  }
}
