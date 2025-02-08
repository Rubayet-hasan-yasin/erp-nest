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
  salaryID: number;

  @OneToOne(() => Employee, (employee) => employee.employeeID, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  employee: Employee;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  basicSalary: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  houseAllowance: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  medicalAllowance: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  transportAllowance: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  otherAllowances: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
