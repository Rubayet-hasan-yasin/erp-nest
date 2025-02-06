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
  LeaveID: number;

  @ManyToOne(() => Employee, (employee) => employee.EmployeeID, {
    onDelete: 'CASCADE',
  })
  Employee: Employee;

  @Column()
  CompanyID: number;

  @Column({ type: 'date' })
  StartDate: Date;

  @Column({ type: 'date' })
  EndDate: Date;

  @Column({ type: 'enum', enum: LeaveType })
  LeaveType: LeaveType;

  @Column({ type: 'enum', enum: LeaveStatus, default: LeaveStatus.PENDING })
  Status: LeaveStatus;

  @Column({ type: 'json', nullable: true })
  Application: object;

  @Column({ type: 'text', nullable: true })
  Reason: string;

  @Column({ type: 'text', nullable: true })
  Remarks: string;

  @CreateDateColumn({ type: 'timestamp' })
  CreatedAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  UpdatedAt: Date;
}
