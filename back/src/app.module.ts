import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimelogsModule } from './timelogs/timelogs.module';

@Module({
  imports: [TimelogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
