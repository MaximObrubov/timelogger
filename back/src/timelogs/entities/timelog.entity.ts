import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Timelog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamptz', nullable: false, })
  start: Date;

  @Column({ type: 'timestamptz', nullable: false, })
  end: Date;

  @Column({ type: 'timestamptz', nullable: false, })
  pauseStart: Date;

  @Column({ type: 'timestamptz', nullable: false, })
  pauseEnd: Date;
}
