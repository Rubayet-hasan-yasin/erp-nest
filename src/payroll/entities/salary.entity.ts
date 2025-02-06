import { Employee } from 'src/employee/entities/employee.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Salary {
  @PrimaryGeneratedColumn()
  SalaryID: number;

  @OneToOne(() => Employee, (employee) => employee.EmployeeID, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  Employee: Employee;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  BasicSalary: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  HouseAllowance: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  MedicalAllowance: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  TransportAllowance: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  OtherAllowances: number;

  @CreateDateColumn({ type: 'timestamp' })
  CreatedAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  UpdatedAt: Date;
}
