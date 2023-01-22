import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param,
  Header,
  Delete,
} from '@nestjs/common';
import { TimelogsService } from './timelogs.service';
import { CreateTimelogDto } from './dto/create-timelog.dto';
import { UpdateTimelogDto } from './dto/update-timelog.dto';

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
    const lines = timelogs.map(tl => {
      return headings.map(key => tl[key]).join(",");
    })
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
}
