import { Employee } from 'src/employee/entities/employee.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class LeaveBalance {
  @PrimaryGeneratedColumn()
  BalanceID: number;

  @ManyToOne(() => Employee, (employee) => employee.EmployeeID, {
    onDelete: 'CASCADE',
  })
  Employee: Employee;

  @Column({ default: 0 })
  TotalCasual: number;

  @Column({ default: 0 })
  UsedCasual: number;

  @Column({ default: 0 })
  RemainingCasual: number;

  @Column({ default: 0 })
  TotalSick: number;

  @Column({ default: 0 })
  UsedSick: number;

  @Column({ default: 0 })
  RemainingSick: number;

  @Column({ default: 0 })
  TotalUnpaid: number;

  @Column({ default: 0 })
  UsedUnpaid: number;

  @Column({ default: 0 })
  RemainingUnpaid: number;
}
