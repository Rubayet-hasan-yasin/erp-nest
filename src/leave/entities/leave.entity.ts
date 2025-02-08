import { Employee } from 'src/employee/entities/employee.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum LeaveType {
  CASUAL = 'Casual',
  SICK = 'Sick',
  ANNUAL = 'Annual',
  MATERNITY = 'Maternity',
  PATERNITY = 'Paternity',
  UNPAID = 'Unpaid',
}

export enum LeaveStatus {
  PENDING = 'Pending',
  APPROVED = 'Approved',
  REJECTED = 'Rejected',
}

@Entity()
export class Leave {
  @PrimaryGeneratedColumn()
  leaveID: number;

  @ManyToOne(() => Employee, (employee) => employee.employeeID, {
    onDelete: 'CASCADE',
  })
  employee: Employee;

  @Column()
  companyID: number;

  @Column({ type: 'date' })
  startDate: Date;

  @Column({ type: 'date' })
  endDate: Date;

  @Column({ type: 'enum', enum: LeaveType })
  leaveType: LeaveType;

  @Column({ type: 'enum', enum: LeaveStatus, default: LeaveStatus.PENDING })
  status: LeaveStatus;

  @Column({ type: 'json', nullable: true })
  application: object;

  @Column({ type: 'text', nullable: true })
  reason: string;

  @Column({ type: 'text', nullable: true })
  remarks: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
