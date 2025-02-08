import { Employee } from 'src/employee/entities/employee.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Salary } from './salary.entity';

export enum PaymentStatus {
  PENDING = 'Pending',
  PAID = 'Paid',
}

@Entity()
export class Payroll {
  @PrimaryGeneratedColumn()
  payrollID: number;

  @ManyToOne(() => Employee, (employee) => employee.employeeID, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  employee: Employee;

  @ManyToOne(() => Salary, (salary) => salary.salaryID, { onDelete: 'CASCADE' })
  @JoinColumn()
  salary: Salary;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  grossSalary: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  bonus: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  deductions: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  netSalary: number;

  @Column({ type: 'integer' })
  payYear: number;

  @Column({ type: 'date' })
  payDate: Date;

  @Column({ type: 'enum', enum: PaymentStatus, default: PaymentStatus.PENDING })
  paymentStatus: PaymentStatus;
}
