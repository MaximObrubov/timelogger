import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Timelog } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateTimelogDto } from './dto/create-timelog.dto';
import { UpdateTimelogDto } from './dto/update-timelog.dto';

@Injectable()
export class TimelogsService {


  constructor(
    @InjectRepository(Timelog) private readonly timelogRepository: Repository<Timelog>,
  ) {}

  create(createTimelogDto: CreateTimelogDto) {
    const newUser = this.timelogRepository.create(createTimelogDto);
    return this.timelogRepository.save(newUser);
  }

  findAll() {
    return this.timelogRepository.findAndCount();
  }

  findOne(id: number) {
    return `This action returns a #${id} timelog`;
  }

  update(id: number, updateTimelogDto: UpdateTimelogDto) {
    return `This action updates a #${id} timelog`;
  }

  remove(id: number) {
    return this.timelogRepository.delete(id);
  }
}
