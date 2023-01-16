import { Module } from '@nestjs/common';
import { TimelogsService } from './timelogs.service';
import { TimelogsController } from './timelogs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Timelog } from 'src/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Timelog]),],
  controllers: [TimelogsController],
  providers: [TimelogsService]
})
export class TimelogsModule {}
