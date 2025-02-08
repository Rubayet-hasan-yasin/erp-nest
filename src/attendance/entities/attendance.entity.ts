import { Employee } from 'src/employee/entities/employee.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

export enum AttendanceStatus {
  PRESENT = 'present',
  ABSENT = 'absent',
  ON_LEAVE = 'onLeave',
  HOLIDAY = 'holiday',
}

@Entity()
export class Attendance {
  @PrimaryGeneratedColumn()
  attendanceID: number;

  @ManyToOne(() => Employee, (employee) => employee.employeeID, {
    onDelete: 'CASCADE',
  })
  employee: Employee;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'time', nullable: true })
  clockIn: string;

  @Column({ type: 'time', nullable: true })
  clockOut: string;

  @Column({ default: false })
  late: boolean;

  @Column({ default: false })
  absent: boolean;

  @Column({ type: 'text', nullable: true })
  remarks: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  location: string;

  @Column({ type: 'text', nullable: true })
  task: string;

  @Column({
    type: 'enum',
    enum: AttendanceStatus,
    default: AttendanceStatus.PRESENT,
  })
  status: AttendanceStatus;

  @Column({ type: 'varchar', length: 45, nullable: true })
  iPAddress: string;
}
