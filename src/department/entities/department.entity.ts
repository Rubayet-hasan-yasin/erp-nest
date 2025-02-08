import { Employee } from 'src/employee/entities/employee.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
} from 'typeorm';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  DepartmentID: number;

  @OneToOne(() => Employee, (employee) => employee.DepartmentID)
  @Column()
  CompanyID: number;

  @Column({ length: 100 })
  DepartmentName: string;

  @Column({ length: 50, unique: true })
  DepartmentCode: string;

  @CreateDateColumn({ type: 'timestamp' })
  CreatedAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  UpdatedAt: Date;
}
