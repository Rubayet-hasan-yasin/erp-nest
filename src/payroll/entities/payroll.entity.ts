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
  PayrollID: number;

  @ManyToOne(() => Employee, (employee) => employee.EmployeeID, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  Employee: Employee;

  @ManyToOne(() => Salary, (salary) => salary.SalaryID, { onDelete: 'CASCADE' })
  @JoinColumn()
  Salary: Salary;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  GrossSalary: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  Bonus: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  Deductions: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  NetSalary: number;

  @Column({ type: 'year' })
  PayMonth: string;

  @Column({ type: 'date' })
  PayDate: Date;

  @Column({ type: 'enum', enum: PaymentStatus, default: PaymentStatus.PENDING })
  PaymentStatus: PaymentStatus;
}
