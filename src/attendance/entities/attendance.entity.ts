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
  AttendanceID: number;

  @ManyToOne(() => Employee, (employee) => employee.EmployeeID, {
    onDelete: 'CASCADE',
  })
  Employee: Employee;

  @Column({ type: 'date' })
  Date: Date;

  @Column({ type: 'time', nullable: true })
  ClockIn: string;

  @Column({ type: 'time', nullable: true })
  ClockOut: string;

  @Column({ default: false })
  Late: boolean;

  @Column({ default: false })
  Absent: boolean;

  @Column({ type: 'text', nullable: true })
  Remarks: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  Location: string;

  @Column({ type: 'text', nullable: true })
  Task: string;

  @Column({
    type: 'enum',
    enum: AttendanceStatus,
    default: AttendanceStatus.PRESENT,
  })
  Status: AttendanceStatus;

  @Column({ type: 'varchar', length: 45, nullable: true })
  IPAddress: string;
}
