import { Employee } from 'src/employee/entities/employee.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class LeaveBalance {
  @PrimaryGeneratedColumn()
  balanceID: number;

  @ManyToOne(() => Employee, (employee) => employee.employeeID, {
    onDelete: 'CASCADE',
  })
  employee: Employee;

  @Column({ default: 0 })
  totalCasual: number;

  @Column({ default: 0 })
  usedCasual: number;

  @Column({ default: 0 })
  remainingCasual: number;

  @Column({ default: 0 })
  totalSick: number;

  @Column({ default: 0 })
  usedSick: number;

  @Column({ default: 0 })
  remainingSick: number;

  @Column({ default: 0 })
  totalUnpaid: number;

  @Column({ default: 0 })
  usedUnpaid: number;

  @Column({ default: 0 })
  remainingUnpaid: number;

  @Column({ default: 0 })
  balance: number;
}
